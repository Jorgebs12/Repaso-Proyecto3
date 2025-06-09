import { FunctionComponent } from "preact/src/index.d.ts";
import Logout from "../islands/Logout.tsx";


const Header: FunctionComponent = () => {
    return (
        <div>
            <a href="/fav-list"> Mis Favoritos </a>
            <Logout />
        </div>
    )
}

export default Header