import { FunctionComponent } from "preact/src/index.d.ts";


const LoginForm: FunctionComponent = ()  => (
    <div>
        <form method="GET" action="/" >
        <input type="text" name="name" placeholder="Introduce nombre" />
        <input type="password" name="password" placeholder="Introduce contraseña" />
        <button type="submit"> Enviar </button>
        </form>
    </div>  
)

export default LoginForm