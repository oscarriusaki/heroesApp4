import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const {search}  = useLocation();
  const { q='' } = queryString.parse(search)

  const heroes = getHeroByName(q);

  const { text, onChange} = useForm({
    text: q
  })

  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(text.trim().length <= 0) return;

    navigate(`?q=${text}`)
    
  }

  return (
    <>
        <h1>Search Page</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h2>Searching</h2>
            <hr />
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                className='form-control'
                placeholder='Search a hero'
                name='text'
                value={text}
                onChange={onChange}
                />
              <button className='btn btn-outline-primary'>
                Search
              </button>
            </form>
          </div>
          <div className="col-7">
            <h2>Results</h2>
            {
              ( q === '')
              ?
              <div className="alert alert-primary">
                Search a hero
              </div>
              :(heroes.length === 0)&&
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            }
            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
          </div>
        </div>
    </>
  )
}
  