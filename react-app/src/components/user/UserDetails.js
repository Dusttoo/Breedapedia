import React from 'react';
import './user.css'

const UserDetails = ({user}) => {
  return (
    <div className='user__user-details'>
        <img className='user__user-details-img' src={user.profile_img} alt={user} />
        <p className='user__user-details-info'>Name: {user.first_name} {user.last_name}</p>
        <p className='user__user-details-info'>Email: {user.email}</p>
        <p className='user__user-details-info'>Member Since: {user.registered_at}</p>
    </div>
  );
};

export default UserDetails;
