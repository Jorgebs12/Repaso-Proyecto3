import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import CharacterList from "../../components/CharacterList.tsx";
import CharacterForm from "../../islands/CharacterForm.tsx";

type Character = {
    id: string
    name: string
    house: string
    image: string
}

export const handler: Handlers<{characters: Character[]}> = {
    async GET (_req: Request, ctx: FreshContext) {
        
        try {
        
        const response = await axios.get("https://hp-api.onrender.com/api/characters")
        const characters: Character[] = response.data
        
        return ctx.render({characters})

        } catch (error) {
            return new Response(`Character not find ${error}`, {status: 404})
        }
    }
}

const Page = (props: PageProps <{ characters: Character[] }> ) => {
    return (
        <div>
            <CharacterForm characters={props.data.characters} />
        </div>
    )
}
export default Page