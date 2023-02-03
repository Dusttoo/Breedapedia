import React from 'react';
import './dashboard.css'

const DashboardSidebar = ({setPage}) => {
  return (
    <div className='dashboard__sidebar'>
        <p onClick={() => setPage('dogs')}>My dogs</p>
        <p onClick={() => setPage('messages')}>My Messages</p>
        <p onClick={() => setPage('classifieds')}>My Classifieds</p>
    </div>
    
  );
};

export default DashboardSidebar;
