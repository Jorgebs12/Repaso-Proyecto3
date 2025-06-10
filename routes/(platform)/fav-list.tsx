import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CharacterList from "../../components/CharacterList.tsx";


type Character = {
    id: string
    name: string
    house: string
    image: string
}

export const handler: Handlers<{ character: Character}> = {
    async GET(req: Request, ctx: FreshContext) {

        const cookie = req.headers.get("Cookie")
        const favCookie = cookie?.split("; ").find((c) => c.startsWith("favCharacter="))

        let favNames: string [] = []

        if(favCookie) favNames = JSON.parse(decodeURIComponent(favCookie.split("=")[1]))

        const response = await axios.get("https://hp-api.onrender.com/api/characters")

        const character: Character[] = response.data

        const filter = character.filter((char) => favNames.includes(char.name))

        return ctx.render ({character: filter})
    }
}


const Page = (props: PageProps <{character: Character[]} >) => {
    return (
        <div>
            <h1> Personajes Favoritos</h1>
            {props.data.character.length > 0 ? (<CharacterList characters={props.data.character} />) : <p> No hay favoritos </p> }
        </div>
    )
}

export default Page