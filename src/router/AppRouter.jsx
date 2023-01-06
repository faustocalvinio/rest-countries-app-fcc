import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CountryPage } from '../pages/CountryPage'
import { HomePage } from '../pages/HomePage'

export const AppRouter = () => {
  return (
        <Routes>
                        
            <Route path="/*" element={ <HomePage />} />
            <Route path="country/:id" element={<CountryPage />} />
            
        </Routes>
  )
}
