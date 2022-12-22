import { CountryItem } from './CountryItem'

export const ListCountries = ({countries}) => {
  return (
    <div style={{ width:'100%'}} className="d-flex flex-row flex-wrap gap-4">
        {countries.map((country)=><CountryItem name={ country.name } flag={ country.flag } />)}        
    </div>

  )
}
