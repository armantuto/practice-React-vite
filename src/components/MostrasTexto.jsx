import { useState } from "react"
import  styles from "./MostrarTexto.module.css"

function ToggleButton({ isOn, onToggle }) {
  return (
    <button className={`${styles.btn}  ${isOn ? styles.on : styles.off }`} onClick={onToggle}>
      {isOn ? 'Ocultar' : 'Mostrar'}
    </button>
  )
}

function Show (){
    const [text, setText] =useState (false)

    return(
        <>
            { text && 
                <h2>Hola!</h2>
            }
            <ToggleButton
        isOn={text}
        onToggle={() => setText(!text)}
      />
        </>
    )
}
export default Show