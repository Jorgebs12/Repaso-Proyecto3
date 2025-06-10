import { FunctionalComponent } from "preact/src/index.d.ts";


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


const CharacterId: FunctionalComponent<{characters: Character[]}> = ({ characters }) => {

    return (
        <div>
              {characters.map((character: Character) => (
                <div key={character.id}>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} />
                    <p>Casa: <a href={`/house/${character.house}`}>{character.house}</a></p>
                    <p>Especie: {character.species}</p>
                    <p>Patronus: {character.patronus}</p>
                    <p>Género: {character.gender}</p>
                    <p>Nombres alternativos: {character.alternate_names.join(", ")}</p>
                </div>
            ))}
        </div>
    )
}

export default CharacterId
