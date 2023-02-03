import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import './dashboard.css'

const Dashboard = () => {
  const user = useSelector((state) => state.session.user)
  const [page, setPage] = useState('Main')
  console.log(page)
  return (
    <div className='dashboard'>
      <h1 className='dashboard__title'>This is my dashboard</h1>
      <div className='dashboard__content-container'>
        <DashboardSidebar setPage={setPage}/>
        <DashboardContent user={user} page={page} />
        <div className='dashboard__main-content'>
        </div>
      </div>
      
    </div>
    
  );
};

export default Dashboard;
