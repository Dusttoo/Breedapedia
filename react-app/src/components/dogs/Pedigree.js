import React, {useState, useEffect} from 'react';

const Pedigree = ({dogId}) => {
    const [dog, setDog] = useState(null)
    const [parents, setParents] = useState()
    const generations = 0;

    useEffect(() => {
    (async () => {
        const response = await fetch(`/api/dogs/${dogId}`, {
        headers: {
        'Content-Type': 'application/json'
        }});

         if (response.ok) {
            const data = await response.json();
            if (data.errors) {
                return;
            }
            setDog(data)
            setParents([data.sire, data.dam])
        }
    })();
    }, []);

    // const getParents = (dog) => {
    //     console.log(dog)
    //     const parents = []
    //         if(dog.sire) {
    //             parents.push(dog.sire)
    //         }
    //         if(dog.dam) {
    //             parents.push(dog.dam)
    //         }
        
    //     setParents(parents)
    // }

    // getParents()

  return (
    <>
    {dog && 
        <div className='dogs__pedigree'>
            <img className='dogs__pedigree-1st dogs__pedigree-img' src={dog.image} alt={dog.reg_name} />
            <div className='dogs__pedigree-2nd '>
            {parents &&
                parents.map((parent) => {
                    console.log(parent)
                    return (
                        <img className='dogs__pedigree-img' src={parent.image} alt={parent.reg_name} />

                    )
                })
            }
            </div>
        </div>
    }
    </>
  );
};

export default Pedigree;
