import { useState } from "react"

// function Animal (props){
// return (
//     <h1>soy un {props.tipo}</h1>
// )
// }




// function Contador() {
//   const [numero, setNumero] = useState(0)
//   const [ numero1, setNumero1]= useState(0)

//   return (
//     <>
//       <p>{numero}</p>
//       <button onClick={() => setNumero(numero + 1)}>
//         Sumar
//       </button>
//           <p>{numero1}</p>
//       <button onClick={() => setNumero1(numero1 - 1)}>
//         Sumar
//       </button>
//     </>
//   )
// }
// export default Contador
 
function Usuario(props) {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && <h1>El nombre es: {props.nombre}</h1>}

      <button onClick={() => setVisible(!visible)}>
        Mostrar / Ocultar
      </button>
    </>
  )
}

export default Usuario