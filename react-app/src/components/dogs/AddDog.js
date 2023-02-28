import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addDog } from '../../store/dogs';

const AddDogs = () => {
    const [dog, setDog] = useState(null)
    const [errors, setErrors] = useState([]);
    const [ownerId, setOwnerId] = useState(null)
    const [sireId, setSireId] = useState(null)
    const [damId, setDamId] = useState(null)
    const [regName, setRegName] = useState(null)
    const [regNumber, setRegNumber] = useState(null)
    const [callName, setCallName] = useState(null)
    const [birthdate, setBirthdate] = useState(null)
    const [deathDate, setDeathDate] = useState(null)
    const [breedId, setBreedId] = useState(null)
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [headSize, setHeadSize] = useState(null)
    const [colorId, setColorId] = useState(null)
    const [gender, setGender] = useState(null)
    const [titles, setTitles] = useState(null)
    const [image, setImage] = useState(null)
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

    const onSubmit = async (e) => {
        e.preventDefault();
        setDog({
            owner_id: ownerId,
            sire_id: sireId,
            dam_id: damId,
            reg_name: regName,
            reg_number: regNumber,
            call_name: callName,
            birth_date: birthdate,
            death_date: deathDate,
            breed_id: breedId,
            weight: weight,
            height: height,
            head_size: headSize,
            color_id: colorId,
            gender: gender,
            titles: titles,
            img_url: image
        })
        const data = await dispatchEvent(addDog(dog))
        if (data) {
            setErrors(data);
        }

    }

    const searchDog = (dog) => {
        console.log('searching')
    }

    console.log(dogs)
    console.log(sireId, damId)

    return (
        <div className='dogs__add-container'>
            <form onSubmit={onSubmit}>
                <div className='login__errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
                </div>
                <div>
                    <label>Sire</label>
                    <select
                    onChange={(e) => setSireId(e.target.value)}
                    >
                        <option selected="true" disabled="disabled">Choose A Sire</option>
                        {dogs && dogs.map((dog) => {
                            if(dog.gender === 'Male') {
                                return (
                                    <option key={dog.id} value={dog.id}>{dog.reg_name}</option>
                                )
                            }
                        })}
                    </select>
                    Or
                    <input
                    type='text'
                    placeholder='Enter a new name'
                    onKeyDown={(e) => {if (e.key === 'Enter') searchDog(e.target.value)}}
                    />
                </div>
                <div>
                    <label>Dam</label>
                    <select
                    onChange={(e) => setDamId(e.target.value)}
                    >
                        {dogs && dogs.map((dog) => {
                            if(dog.gender === 'Female') {
                                return (
                                    <option key={dog.id} value={dog.id}>{dog.reg_name}</option>
                                )
                            }
                        })}
                    </select>
                </div>
                <div>
                    <label>Registered Name</label>
                    <input></input>
                </div>
                <div>
                    <label>Call Name</label>
                    <input></input>
                </div>
                <div>
                    <label>Registered Number</label>
                    <input></input>
                </div>
                <div>
                    <label>Birth Date</label>
                    <input></input>
                </div>
                <div>
                    <label>Death Date</label>
                    <input></input>
                </div>
                <div>
                    <label>Breed</label>
                    <input></input>
                </div>
                <div>
                    <label>Weight</label>
                    <input></input>
                </div>
                <div>
                    <label>Height</label>
                    <input></input>
                </div>
                <div>
                    <label>Head Size</label>
                    <input></input>
                </div>
                <div>
                    <label>Color</label>
                    <input></input>
                </div>
                <div>
                    <label>Gender</label>
                    <input></input>
                </div>
                <div>
                    <label>Titles</label>
                    <input></input>
                </div>
                <div>
                    <label>Image</label>
                    <input></input>
                </div>
            </form>
            
        </div>
    );
};

export default AddDogs;


