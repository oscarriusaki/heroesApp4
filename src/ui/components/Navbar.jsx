import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () =>{
    navigate('/login', {
      replace:true
    })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <div className="navbar-collapse">
            <div className="navbar-nav">
              
              <NavLink 
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`} 
                to='/marvel'>Marvel
              </NavLink>

              <NavLink 
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`} 
                to='/dc'>Dc
              </NavLink>

              <NavLink 
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                to='/search'
              >
                Search
              </NavLink>
            </div>
          </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
          <ul className="navbar-nav m1-auto">
            <span className='nav-item nav-link text-primary' >Oscar</span>
            <button 
              className="nav-item nav-link btn"
              onClick={onLogout}
              >
                Logout
            </button>
          </ul>
        </div>
      </nav>

    </>
  )
}
