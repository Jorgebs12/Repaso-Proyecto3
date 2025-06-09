

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

//revisar si quitamos 
        {characters.image && <img src={characters.image} alt={characters.name} />}
