import React from 'react';
import MyDogs from '../dogs/MyDogs'
import Messages from '../messages/Messages'
import MyClassifieds from '../classifieds/MyClassifieds'
import './dashboard.css'
import UserDetails from '../user/UserDetails';

const DashboardContent = ({user, page}) => {
  return (
    <div className='dashboard__main-content'>
        {page === 'dogs' ? <MyDogs />  
        : page === 'messages' ? <Messages />
        : page === 'classifieds' ? <MyClassifieds /> 
        : <UserDetails user={user}/>}
    </div>
  );
};

export default DashboardContent;
