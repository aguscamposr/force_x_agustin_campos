import React from 'react'
import './styles.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='mainContainer'>
       <h1>{greeting}</h1> 
    </div>
  )
}

export default ItemListContainer