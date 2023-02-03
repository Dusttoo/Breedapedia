import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const ViewDog = ({dogId}) => {
    const { id } = useParams();
    const [dog, setDog] = useState(null)
    console.log(dog, dogId, id)

    useEffect(() => {
    (async () => {
        const response = await fetch(`/api/dogs/${dogId ? dogId : +id}`, {
        headers: {
        'Content-Type': 'application/json'
        }});

         if (response.ok) {
            const data = await response.json();
            if (data.errors) {
                return;
            }
            console.log(data)
            setDog(data)
        }
    })();
    }, []);
  return (
    <div className='dogs__dog-details'>
        {dog && 
        <>
            <p>Registered Name: {dog.reg_name}</p>
            <p>Call Name: {dog.call_name}</p>
            <p>Birthdate: {dog.birthdate}</p>
            <p>Gender: {dog.gender}</p>
            <p>Titles: {dog.titles}</p>
            <p>Weight: {dog.weight}</p>
            <p>Height: {dog.height}</p>
        </>
        }
        

    </div>
  );
};

export default ViewDog;
