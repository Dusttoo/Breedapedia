import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import './auth.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button className='logout__button' onClick={onLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  )
};

export default LogoutButton;
