import React from 'react';

const ViewDog = ({dog}) => {
  return (
    <div className='dogs__dog-details'>
        <p>Registered Name: {dog.reg_name}</p>
        <p>Call Name: {dog.call_name}</p>
        <p>Birthdate: {dog.birthdate}</p>
        <p>Gender: {dog.gender}</p>
        <p>Titles: {dog.titles}</p>
        <p>Weight: {dog.weight}</p>
        <p>Height: {dog.height}</p>

    </div>
  );
};

export default ViewDog;
