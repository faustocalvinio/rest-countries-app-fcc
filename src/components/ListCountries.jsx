import { CountryItem } from './CountryItem'

export const ListCountries = ({countries}) => {
  return (
    <div style={{ width:'100%'}} className="d-flex flex-row flex-wrap gap-4">
        {countries.map((country)=><CountryItem key={ country.id } id={ country.id }  name={ country.name } flag={ country.flag } capital={ country.capital } population={ country.population } region={ country.region } />)}        
    </div>

  )
}
