import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

const AllDogs = () => {
    const [dogs, setDogs] = useState(null)
    useEffect(() => {
    (async () => {
        const response = await fetch('/api/dogs/', {
        headers: {
        'Content-Type': 'application/json'
        }});

         if (response.ok) {
            const data = await response.json();
            if (data.errors) {
                return;
            }
            setDogs(Object.values(data.dogs))
        }
    })();
    }, []);

    console.log(dogs)
    return (
    <div className='dogs__list'>
        {dogs && dogs.map((dog) => {
            console.log(dog)
        return (
            <NavLink to={`/dogs/${dog.id}`} exact={true} activeClassName='active' key={dog.id}>{dog.reg_name}</NavLink>
        )
        })}
        
    </div>
    );
};

export default AllDogs;

  
 