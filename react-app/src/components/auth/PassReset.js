import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { passReset } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './auth.css'

const PassReset = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const user = useSelector(state => state.session.user);


    const dispatch = useDispatch()

    const onReset = async (e) => {
        e.preventDefault();
        const data = await dispatch(passReset(email));
        if (data) {
        setErrors(data);
        }
    };

    if (user) {
        return <Redirect to='/dashboard' />;
    }

  return (
    <form onSubmit={onReset}> 
        <div className=''>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
            <label>Email</label>
            <input
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ></input>
        </div>
        <button type='submit'>Reset</button>

    </form>
  )
};

export default PassReset;
