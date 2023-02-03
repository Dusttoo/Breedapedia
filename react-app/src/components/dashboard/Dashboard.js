import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import './dashboard.css'

const Dashboard = () => {
  const user = useSelector((state) => state.session.user)
  const [page, setPage] = useState('Main')
  const [dog, setDog] = useState({})
  return (
    <div className='dashboard'>
      <h1 className='dashboard__title'>Welcome, {user.first_name}</h1>
      <div className='dashboard__content-container'>
        <DashboardSidebar setPage={setPage}/>
        <DashboardContent user={user} page={page} setPage={setPage} dog={dog} setDog={setDog}/>
        {/* <div className='dashboard__main-content'>
        </div> */}
      </div>
      
    </div>
    
  );
};

export default Dashboard;
