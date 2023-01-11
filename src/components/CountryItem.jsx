import React from 'react'
import { Link, Navigate } from 'react-router-dom'
export const CountryItem = ({name,flag,capital,region,population,id}) => {

  const onNavigateToCountryPage=(id)=>{
    console.log('on navigate')
    const url=`/country/${id}`
    console.log(url)
    return <Navigate to={url} />
  }


  return (
    <div className="country-card" onClick={ ()=>onNavigateToCountryPage(id)}>
        <img className="country-img" src={ flag }  />
        <section className="data-cont">
          <p className="country-name">{ name }</p>
          <p className="country-capital">{ capital }</p>
          <p className="country-region">{ region }</p>
          <p className="country-population">{ population }</p>
          <Link className='btn btn-primary' to={`/country/${id}`}>View More </Link>
        </section>
        
        

    </div>
    
  )
}
