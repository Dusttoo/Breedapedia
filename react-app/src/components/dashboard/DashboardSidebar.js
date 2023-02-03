import React from 'react';
import './dashboard.css'

const DashboardSidebar = ({setPage}) => {
  return (
    <div className='dashboard__sidebar'>
        <ul className='dashboard__sidebar-nav'>
            <li className='dashboard__sidebar-nav-item' onClick={() => setPage('Main')}>My Profile</li>
            <li className='dashboard__sidebar-nav-item' onClick={() => setPage('dogs')}>My Dogs</li>
            <li className='dashboard__sidebar-nav-item' onClick={() => setPage('messages')}>My Messages</li>
            <li className='dashboard__sidebar-nav-item' onClick={() => setPage('classifieds')}>My Classifieds</li>
        </ul>
    </div>
    
  );
};

export default DashboardSidebar;
