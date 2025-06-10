import { FunctionalComponent } from "preact/src/index.d.ts";

type House = {
    name: string;
    image?: string;
}

const CharacterHouse: FunctionalComponent<{ houses: House[] }> = ({ houses }) => {
    return (
        <div>
            <h1 class="title">Personajes de la casa</h1>
            <ul>
                {houses.map((character) => (
                <li key={character.name}>
                    <img src={character.image} alt={character.name} />
                    <p>{character.name}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default CharacterHouse;
