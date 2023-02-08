import React from 'react';
import { NavLink } from 'react-router-dom';
import './landing.css'

const Landing = () => {

  return (
    <div className='landing'>
        <div className='landing__hero-box'>
          <h2 className='landing__hero-title'>Pedigrees simplified</h2>
          <NavLink to='/dogs' className='landing__hero-button'>View Dogs</NavLink>
        </div>
        <div className='landing__login-signup'>
          <h2 className='landing__login-signup-title'>About Breedapedia</h2>
          <p className='landing__login-signup-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce 
            ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eros donec ac odio 
            tempor orci dapibus ultrices. Vitae aliquet nec ullamcorper sit amet. Cras tincidunt lobortis 
            feugiat vivamus. Sed blandit libero volutpat sed cras ornare arcu. Sit amet venenatis urna cursus 
            eget nunc. Ultrices mi tempus imperdiet nulla. Pellentesque habitant morbi tristique senectus et netus et.
          </p>
          <NavLink to='/login' className='landing__login-signup-button'>Login</NavLink>
          <NavLink to='/sign-up' className='landing__login-signup-button'>Sign Up</NavLink>
        </div>
        <div className='landing__new-content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eros donec ac odio tempor orci dapibus ultrices. Vitae aliquet nec ullamcorper sit amet. Cras tincidunt lobortis feugiat vivamus. Sed blandit libero volutpat sed cras ornare arcu. Sit amet venenatis urna cursus eget nunc. Ultrices mi tempus imperdiet nulla. Pellentesque habitant morbi tristique senectus et netus et. Auctor eu augue ut lectus arcu bibendum at varius. Morbi tristique senectus et netus et malesuada fames ac turpis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Mi ipsum faucibus vitae aliquet nec. Purus faucibus ornare suspendisse sed nisi lacus sed. Scelerisque in dictum non consectetur a erat nam at lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p>
        </div>
        <div className='landing__articles'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eros donec ac odio tempor orci dapibus ultrices. Vitae aliquet nec ullamcorper sit amet. Cras tincidunt lobortis feugiat vivamus. Sed blandit libero volutpat sed cras ornare arcu. Sit amet venenatis urna cursus eget nunc. Ultrices mi tempus imperdiet nulla. Pellentesque habitant morbi tristique senectus et netus et. Auctor eu augue ut lectus arcu bibendum at varius. Morbi tristique senectus et netus et malesuada fames ac turpis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Mi ipsum faucibus vitae aliquet nec. Purus faucibus ornare suspendisse sed nisi lacus sed. Scelerisque in dictum non consectetur a erat nam at lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p>
        </div>
        <div className='landing__kennels'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eros donec ac odio tempor orci dapibus ultrices. Vitae aliquet nec ullamcorper sit amet. Cras tincidunt lobortis feugiat vivamus. Sed blandit libero volutpat sed cras ornare arcu. Sit amet venenatis urna cursus eget nunc. Ultrices mi tempus imperdiet nulla. Pellentesque habitant morbi tristique senectus et netus et. Auctor eu augue ut lectus arcu bibendum at varius. Morbi tristique senectus et netus et malesuada fames ac turpis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Mi ipsum faucibus vitae aliquet nec. Purus faucibus ornare suspendisse sed nisi lacus sed. Scelerisque in dictum non consectetur a erat nam at lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p>
        </div>
        <div className='landing__featured'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eros donec ac odio tempor orci dapibus ultrices. Vitae aliquet nec ullamcorper sit amet. Cras tincidunt lobortis feugiat vivamus. Sed blandit libero volutpat sed cras ornare arcu. Sit amet venenatis urna cursus eget nunc. Ultrices mi tempus imperdiet nulla. Pellentesque habitant morbi tristique senectus et netus et. Auctor eu augue ut lectus arcu bibendum at varius. Morbi tristique senectus et netus et malesuada fames ac turpis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Mi ipsum faucibus vitae aliquet nec. Purus faucibus ornare suspendisse sed nisi lacus sed. Scelerisque in dictum non consectetur a erat nam at lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p>
        </div>

    </div>
  );
};

export default Landing;
