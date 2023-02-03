import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.session.user)
  return (
    <>
      <h1>This is my dashboard</h1>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <img src={`${user.profile_img}`} alt={`${user.first_name} profile`} />
      <p>Member since: {user.registered_at}</p>
    </>
    
  );
};

export default Dashboard;
