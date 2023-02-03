import React from 'react';
import MyDogs from '../dogs/MyDogs'
import Messages from '../messages/Messages'
import MyClassifieds from '../classifieds/MyClassifieds'
import './dashboard.css'

const DashboardContent = ({user, page}) => {
  return (
    <div className='dashboard__main-content'>
        {page === 'dogs' ? <MyDogs />  
        : page === 'messages' ? <Messages />
        : page === 'classifieds' ? <MyClassifieds /> 
        : <div>
            Main Page
        </div>}
    </div>
  );
};

export default DashboardContent;
