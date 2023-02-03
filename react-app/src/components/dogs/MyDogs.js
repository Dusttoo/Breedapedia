import React from 'react';

const MyDogs = ({user, setPage, setDog}) => {
  const processClick = (dog) => {
    setPage('dogid')
    setDog(dog)
  }
  return (
    <div className='dogs__my-list'>
      {user.dogs.map((dog) => {
        return (
          <p key={dog.id}
          onClick={() => processClick(dog)}>{dog.reg_name}</p>
        )
      })}
        
    </div>
  );
};

export default MyDogs;
