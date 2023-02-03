import React from 'react';
import NavBar from './NavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className='header'>
    <div className='header__top'>
        <FontAwesomeIcon className='header__icon' icon={faBars}/>
        <h1 className='header__title'>
            <NavLink to='/' exact={true} activeClassName='active'>
                <span className='header__title-left'>Breed</span>
                <span className='header__title-right'>apedia</span>
            </NavLink></h1>
    </div>
    <NavBar />
    </header>
  );
}

export default Header;
