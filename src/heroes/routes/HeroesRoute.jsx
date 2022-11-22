import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage } from '../pages';
import { HeroePage } from '../pages/HeroePage';
import { SearchPage } from '../pages/SearchPage';

export const HeroesRoute = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Routes>
              <Route path='/marvel' element={<MarvelPage />} />
              <Route path='/dc' element={<DcPage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/hero/:id' element={<HeroePage /> } />
              <Route path='/*' element={ <Navigate to='/marvel' /> } />
          </Routes>
        </div>
    </>
  )
}
