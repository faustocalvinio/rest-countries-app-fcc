import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
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
    <div>CountryPage</div>
  )
}
