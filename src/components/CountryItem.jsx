import React from 'react'
export const CountryItem = ({name,flag}) => {
  return (
    <div style={{maxWidth: "320px"  }} className='card py-2 px-1 d-flex flex-column justify-content-center align-items-center'>
        <h1 className="text-center">{ name }</h1>
        <img style={{maxWidth: "320px"  }} src={ flag }  />

    </div>
    
  )
}
