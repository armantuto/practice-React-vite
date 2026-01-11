
import './App.css'
import Banner from './components/Banner'
import Producto from './components/chat2'
import Producto1 from './components/chat3'
import Boton from './components/AddNumero'
import Usuario from './components/chatgtp'
import HouseList from './components/HouseList'
import Show from './components/MostrasTexto'
import Api from "./components/apiPollo"

function App() {


  return (
    <>
     <Banner headerText ="sell houses"/>
     <HouseList/>
     <Usuario nombre="arma"/>
     <Producto/>
     <Producto1/>
     <Boton/>
     <Show/>
     <Api/>
    </>
  )
}

export default App
