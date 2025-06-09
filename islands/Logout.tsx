const Logout = () => {
    const ClickLogout = () => { 
        document.cookie = "name=; path=/; max-age=0"
        document.cookie = "favCharacter=; path=; max-age=0"
        window.location.href = "/"
    }
    return <a onClick={ClickLogout} > Cerrar Sesion </a>
}

export default Logout

/*
OTRA FORMA DE HACERLO

const Logout = () => (
  <a onClick={() => {
      document.cookie = "name=; path=/; max-age=0";
      document.cookie = "favCharacter=; path=/; max-age=0";
      window.location.href = "/";
    }} style={{ cursor: "pointer" }} > Cerrar Sesion
  </a>
);

export default Logout
*/