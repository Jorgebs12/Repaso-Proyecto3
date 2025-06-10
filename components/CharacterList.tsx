import { FunctionalComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";

type Character = {
    id: string
    name: string,
    house: string,
    image: string,
}

//Primer characters llamarse igual que las props de la ruta
const CharacterList: FunctionalComponent<{characters: Character[]}> = ({characters}) => {
    return ( 
        <div>
        <h1> HOLA </h1>
        <ul> 
            {characters.map((character) => (
                <li key= {character.id} >
                    <a href= {`/character/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                        <p> {character.name} </p>
                        <p> House: {character.house} </p>
                    </a>
                    <Fav id={character.name} />
                </li>
            ))}
        </ul>
         </div>
    )
}

export default CharacterList