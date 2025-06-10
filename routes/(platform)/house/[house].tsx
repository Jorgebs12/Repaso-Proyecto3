import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CharacterHouse from "../../../components/CharacterHouse.tsx";


type Character = {
    id: string;
    name: string;
    image: string;
    house: string

}

export const handler: Handlers<{character: Character[]}> = {
    async GET (_req: Request, ctx: FreshContext) {
        
        const {house} = ctx.params

        try {
            const response = await axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`)
            const character: Character[] = response.data

            return ctx.render({ character })

        } catch (error) {
            return new Response(`Character not found${error}`, { status: 404 });
        }
    }
}

const Page = (props: PageProps <{character: Character []}>) => {
    return(
        <div> 
            <CharacterHouse houses={props.data.character} />
        </div>
    )
}

export default Page;