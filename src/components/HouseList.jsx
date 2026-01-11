import {  useState } from "react"
import HouseRow from "./HouseRow"

const housesArray = [
   { id: 1,
    addres: "Maracaibo",
    country: "venezuela",
    price: 55000
   },
   {
    id: 2,
    addres: "valencia",
    country: "venezuela",
    price: 45250
   }
]


const HouseList = () => {
const [houses, setHouses] = useState(housesArray)


// useEffect(()=> {
//     const fetchHouses = async () => {

//         const response =  await fetch("https//localhost:4000/house")
//         const houses = await response.json();
//         setHouses(houses)
//     };
//     fetchHouses()
// })

const addHouse = () => {
    setHouses([...houses,
        {
            id: 6,
            addres: "coca",
            country: "usa",
            price: 1000,
        }
    ])
}

    return(
<>
<div className="row mb-2">
    <h5 className="themeFontColor text-center">
        houses currently on the market
    </h5>
</div>
<table className=" table table-hover">
    <thead>
        <tr>
            <th>Address</th>
            <th>country</th>
            <th>Asking Price</th>
        </tr>
    </thead>
    <tbody>
        {houses.map(h => <HouseRow key={h.id} house={h}/>)}
    </tbody>
</table>
<button onClick={addHouse} className="btn btn-primary ">Add </button>


</>)
}

export default HouseList