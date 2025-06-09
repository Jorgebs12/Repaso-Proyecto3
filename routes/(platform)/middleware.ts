import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";


type State = {
    name: string
}

export const handler: MiddlewareHandler<State> = async(req: Request, ctx: FreshContext) => {
    //Obtenemos los headers (Cabeceras)
    const headers = req.headers
    //Buscamos la cabecera llamada "Cookie"
    const cookie = headers.get("Cookie")
    //Dividimos el array usando por (;)
    const cookies = cookie?.split(";")
    //Buscamos dentro de la cookie, eliminamos espacios al inicio y al final, empiece por "name".
    const cookie_name = cookies?.find(c => c.trim().startsWith("name"))

    if(cookie_name) {
        //Dividimos la cookie por (=) y nos quedamos la segunda parte
        const username = cookie_name.split("=")[1]
        //Guarda el nombre de usuario en el context
        ctx.state = {name: username}
        const next = await ctx.next()
        return next
    }

    return new Response(null, {status: 302, headers: {location: "/ "}})

}