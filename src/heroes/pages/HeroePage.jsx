import React, { useMemo } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getHeroId } from '../helpers/getHeroId';

export const HeroePage = () => {

  const {id} = useParams();
  const heroe = useMemo(() => getHeroId(id), [id]);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1)
  }

  if(!heroe){
    return <Navigate to='/marvel' />
  }
  return (
    <>
        <h1>Heroe Page</h1>
        <hr />
        <div className="row mt-5">
          <div className="col-4">
            <img 
              src={ `/assets/heroes/${id}.jpg`} 
              alt={heroe.superhero} 
              className="img-thumbnail animate__animated animate__fadeIn"
              />
          </div>
          <div className="col-8">
            <h3>{heroe.superhero}</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b>Alter ego: </b> {heroe.alter_ego} </li>
              <li className='list-group-item'> <b>Publisher:</b> {heroe.publisher} </li>
              <li className='list-group-item'> <b>First appearance: </b> {heroe.first_appearance} </li>
            </ul>
            <h5 className='mt-3'>Characters</h5>
            <p>{heroe.characters}</p>
            <button 
              className='btn btn-outline-primary'
              onClick={onBack}
              >
              Back
            </button>
          </div>
        </div>
    </>
  )
}