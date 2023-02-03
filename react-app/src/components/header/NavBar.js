import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './header.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user)

  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__list-item'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Dogs
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Classifieds
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Community
          </NavLink>
        </li>
        {!user && <li className='navbar__list-item'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> }
        {!user && <li className='navbar__list-item'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> }
        {user && 
        <li className='navbar__list-item'>
          <NavLink to='/dashboard' exact={true} activeClassName='active'>
            <FontAwesomeIcon className='logout__button' icon={faUser}/>
          </NavLink>
        </li>
        }
        {user && 
        <li className='navbar__list-item'>
          <LogoutButton /> 
        </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
