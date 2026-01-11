const HouseRow = ({house}) => {

    return (
  <tr>
            <td>{house.addres}</td>
             <td>{house.country}</td>
              <td>{house.price}</td>
           </tr>
    )
}

export default HouseRow;