import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";


type Character = {
    id: string;
    name: string;
    image: string;
    house: string;
    species: string;
    patronus: string;
    gender: string;
    alternate_names: string[];
}

export const handler: Handlers<{character: Character}> = {
    async GET (_req: Request, ctx: FreshContext) {
        
        const {id} = ctx.params

        try {
            const response = await axios.get(`https://hp-api.onrender.com/api/characters/${id}`)
            const character: Character = response.data

            return ctx.render({ character })

        } catch (error) {
            return new Response(`Character not found${error}`, { status: 404 });
        }
    }
}

const Page = (props: PageProps <{character: Character}>) => {
    return(
        <div> 
            <h1> Busqueda de Personajes </h1>
            <CharacterId characters={props.data.character} />
        </div>
    )
}
export default Page;