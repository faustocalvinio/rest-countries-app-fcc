import React from 'react'
import './CountryItem.css'
export const CountryItem = ({name,flag}) => {
  return (
    <div className='main-country-container'>
        <h1>{ name }</h1>
        <img src={ flag }  />

    </div>
    
  )
}
