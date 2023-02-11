import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { passUpdate } from '../../store/session';
import { Redirect, useParams  } from 'react-router-dom';
import './auth.css'

const UpdatePass = () => {
    const [errors, setErrors] = useState([]);
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const {token} = useParams()

    const dispatch = useDispatch()

    const onReset = async (e) => {
        e.preventDefault();
        const data = await dispatch(passUpdate(token, password));
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
            <label>Password</label>
            <input
            type='text'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            ></input>
        </div>
        <button type='submit'>Reset</button>

    </form>
  )
};

export default UpdatePass;
