import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    id: string
}

const Fav: FunctionalComponent<Props> = ({id}) => {

    const [isFav, setIsFav] = useState(false)

    useEffect(() => {

        //Buscamos la cookie
        const cookie = document.cookie.split("; ").find((e) => e.startsWith("favCharacter="))

        if(cookie) {
            //Se decodifica la cookie y se comprueba si el id está en la lista de favoritos. Si está, pone isFav a true.
            const favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
            setIsFav(favs.includes(id))
        }

    }, [id])

    const toogleFav = () => {
        //Buscamos la cookie
        const cookie = document.cookie.split("; ").find((e) => e.startsWith("favCharacter="))

        //Creamos array vacio para guardar los favoritos
        let favs: string [] = []

        //Si existe la cookie, se decodifica y se convierte de JSON a array de strings.
        if(cookie) favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
        
        //Si el personaje ya es favorito (isFav es true), lo elimina del array de favoritos. Si no lo es, lo añade al array.
        const updateFav = isFav ? favs.filter((f) => f !== id) : [...favs, id]

        //Actualizamos la cookie favCharacter con la nueva lista de favoritos
        document.cookie = `favCharacter=${encodeURIComponent(JSON.stringify(updateFav))}; Path=/`;

        setIsFav(!isFav);

    }

    return (
        <button type="button" onClick={toogleFav}> {isFav ? "Delete" : "Add" } </button>
    )
}

export default Fav