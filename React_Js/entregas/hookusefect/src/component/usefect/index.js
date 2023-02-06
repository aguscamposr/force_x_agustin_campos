import React from 'react'
import { useEffect, useState } from 'react';

const Usefect = () => {


const [coordX, setCoordX] = useState(0);
const handleMouseMove = (event) => {
setCoordX(event.clientX)
}
  useEffect(() => {

     window.addEventListener('mousemove', handleMouseMove)
    return()=> {
       //cleanup, limpieza
      window.removeEventListener('mousemove', handleMouseMove)
     }
   }, []);
  return (
    <div>Usefect</div>
  )
}

export default Usefect