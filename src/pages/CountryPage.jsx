import React, { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCountryById } from '../helpers/getCountryById';

export const CountryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
      }
    
    const country = useMemo( () => getCountryById( id ), [ id ]); 
    console.log(country)
  return (
    <>
    <div>CountryPage</div>
    <p>{id}</p>
    <Link className='btn btn-primary' to={`/`}>Back</Link>
    </>
  )
}
