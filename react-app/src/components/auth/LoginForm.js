import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login, googleLogin } from '../../store/session';
import { GoogleLogin } from '@react-oauth/google';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='login'>
      <form className='login__form' onSubmit={onLogin}>
        <h2 className='login__form-title'>Log In</h2>
        <div className='login__errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='login__input-section'>
          <label className='login__label' htmlFor='email'>Email</label>
          <input
            className='login__input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login__input-section'>
          <label className='login__label' htmlFor='password'>Password</label>
          <input
            className='login__input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <NavLink to='/password-reset' className='login__forgot-pass'>Forgot password?</NavLink>
        <button className='login__submit' type='submit'>Login</button>
        <GoogleLogin
          onSuccess={credentialResponse => {
            dispatch(googleLogin(credentialResponse.credential))
          }}
          onError={() => {
            return (
              <p>Houston we have a problem.</p>
            )
          }}
        />
        <div className='login__signup-con'>
            <span>No account? <NavLink to='/sign-up'>Sign up</NavLink></span>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
