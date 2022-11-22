import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoute } from '../heroes';

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/*' element={
              <HeroesRoute />
             } />
        </Routes>
    </>
  )
}
