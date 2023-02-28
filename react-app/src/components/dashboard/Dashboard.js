import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import './dashboard.css'
import { addDog } from '../../store/dogs';
import AddDogs from '../dogs/AddDog';

const Dashboard = () => {
  const user = useSelector((state) => state.session.user)
  const [page, setPage] = useState('Main')
  const [dog, setDog] = useState({})
  const [addDog, setAddDog] = useState(false)

  return (
    <div className='dashboard'>
      <h1 className='dashboard__title'>Welcome, {user.first_name}</h1>
      <div>
        <button onClick={() => setAddDog(!addDog)}>Add dog</button>
      </div>
      <div className='dashboard__content-container'>
        <DashboardSidebar setPage={setPage}/>

        {!addDog ? 
        <DashboardContent user={user} page={page} setPage={setPage} dog={dog} setDog={setDog}/>
        :
        <AddDogs/>}
        {/* <div className='dashboard__main-content'>
        </div> */}
      </div>
      
    </div>
    
  );
};

export default Dashboard;
