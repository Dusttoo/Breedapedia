import React from 'react';
import MyDogs from '../dogs/MyDogs'
import Messages from '../messages/Messages'
import MyClassifieds from '../classifieds/MyClassifieds'
import './dashboard.css'
import UserDetails from '../user/UserDetails';
import ViewDog from '../dogs/ViewDog';

const DashboardContent = ({user, page, setPage, dog, setDog}) => {
  return (
    <div className='dashboard__main-content'>
        {page === 'dogs' ? <MyDogs user={user} setPage={setPage} setDog={setDog}/>  
        : page === 'messages' ? <Messages />
        : page === 'classifieds' ? <MyClassifieds /> 
        : page === 'dogid' ? <ViewDog dog={dog}/> 
        : <UserDetails user={user}/>}
    </div>
  );
};

export default DashboardContent;
