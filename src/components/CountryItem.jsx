import React from 'react'
export const CountryItem = ({name,flag,capital,region,population}) => {
  return (
    <div className="country-card">
        <img className="country-img" src={ flag }  />
        <section className="data-cont">
          <p className="country-name">{ name }</p>
          <p className="country-capital">{ capital }</p>
          <p className="country-region">{ region }</p>
          <p className="country-population">{ population }</p>

        </section>
        
        

    </div>
    
  )
}
