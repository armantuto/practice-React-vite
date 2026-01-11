import { useState } from "react"

function Boton (){
    const [numero, setNumero ] = useState(0)

  

    return(
        <>
        <h1>{numero}</h1>
        <button onClick={() => setNumero(numero + 1)}>Add</button>
        <button onClick={() => setNumero(numero - 1)}>restar</button>
        </>
    )
}

export default Boton