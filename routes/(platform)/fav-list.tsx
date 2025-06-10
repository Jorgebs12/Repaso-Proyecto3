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

        //Obtenemos la cabecera Cookie
        const cookie = req.headers.get("Cookie")
        //Buscamos la cookie favCharacter en las cookies.
        const favCookie = cookie?.split("; ").find((c) => c.startsWith("favCharacter="))

        //Creamos un array vacío para los favoritos.
        let favNames: string [] = []

        //Si existe la cookie, se decodifica y se convierte de JSON a array de strings.
        if(favCookie) favNames = JSON.parse(decodeURIComponent(favCookie.split("=")[1]))

        const response = await axios.get("https://hp-api.onrender.com/api/characters")

        const character: Character[] = response.data

        //Filtramos los personajes para quedarnos solo con los que están en la lista de favoritos.
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