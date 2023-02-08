import React, { useContext } from 'react'
import Context from '../Context/Context'
import Productlist from './Productlist';

function Produce() {
    const data=useContext(Context);
  return (
    <div>
      <h2 style={{fontFamily:'Muli'}}>Produce &#62;</h2>
      <Productlist/>
    </div>
  )
}

export default Produce