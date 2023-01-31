import React from 'react'
import './styles.css'

const ItemListContainer = ({children}) => {
  return (
    <div className='mainContainer'>
        {children}
    </div>
  )
}

export default ItemListContainer