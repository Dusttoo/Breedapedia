import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from "react-router-dom";
import Pedigree from './Pedigree';

const ViewDog = ({dogId}) => {
    const { id } = useParams();
    const [dog, setDog] = useState(null)

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
            setDog(data)
        }
    })();
    }, [id, dogId]);
  return (
    <div className='dogs__dog-details'>
        {dog && 
        <div className='dogs__dog-details-con'>
            <img className='dogs__dog-details-img' src={dog.image} alt={dog.name}/>
            <div className='dogs__dog-details-info'>
                <p>Registered Name: {dog.reg_name}</p>
                <p>Call Name: {dog.call_name}</p>
                <p>Birthdate: {dog.birthdate}</p>
                <p>Gender: {dog.gender}</p>
                <p>Breed: {dog.breed.name}</p>
                <p>Color: {dog.color.name}</p>
                {dog.dam && <NavLink to={`/dogs/${dog.dam.id}`}>Dam: {dog.dam.reg_name}</NavLink>}
                {dog.sire && <NavLink to={`/dogs/${dog.sire.id}`}>Sire: {dog.dam.reg_name}</NavLink>}
                <p>Titles: {dog.titles}</p>
                <p>Weight: {dog.weight}</p>
                <p>Height: {dog.height}</p>
                <p>Owner: </p>
            </div>
            <div className='dogs__dog-details-ped'>
                <Pedigree dogId={dog.id}/>
            </div>

        </div>
        }

    </div>
  );
};

export default ViewDog;
