import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterList from "../components/CharacterList.tsx";


type Character = {
    id: string
    name: string
    house: string
    image: string
}

type Props = {
    characters?: Character[]
}

const CharacterForm: FunctionalComponent<Props> = (props) => {
    const timeout = useRef<NodeJS.Timeout | null> (null)
    const [inputValue, setInputValue] = useState("")
    const [searchName, setSearchName] = useState("")

    const character = props.characters ?? []

    useEffect(() => {
        if(timeout.current) clearTimeout(timeout.current)

        timeout.current = setTimeout(() => {
            setSearchName(inputValue)
        },100)

        return () => {
            if(timeout.current) clearTimeout(timeout.current)
        }
    },[inputValue])

    const filter = character.filter((ch) => {
        return ch.name.toLocaleLowerCase().includes(searchName.toLowerCase())
    })

    /*
    OTRA OPCION DE HACERLO
    const filter = character.filter((ch) => 
        ch.name.toLocaleLowerCase().includes(searchName.toLowerCase())
    )
    */

    return ( 
        <div> 
            <form onSubmit={e => e.preventDefault()}>
                <input type= "text" name= "name" placeholder="Introduce nombre" value={inputValue}
                    onInput={e => setInputValue(e.currentTarget.value)} />
            </form>
            <CharacterList characters={filter} />
        </div>
    )

}

export default CharacterForm