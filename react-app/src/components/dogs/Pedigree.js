import React, {useState, useEffect} from 'react';

const Pedigree = ({dogId}) => {
    const [dog, setDog] = useState(null)
    const [parents, setParents] = useState()
    let generation = 0;
    const queue = []
    const familyTree = []

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

    const enqueue = (node) => {
        queue.push(node)
    }

    const dequeue = (node) => {
        queue.shift()
    }

    const getFamilyTree = (dog) => {
        let currrentDog = {}
        if(!queue.length) {
            currrentDog = dog
            enqueue(dog)
        }

        for(let i=0; i < queue.length; i++){

        }

    }

    getFamilyTree()

  return (
    <>
    {dog && 
        <div className='dogs__pedigree'>
            <img className='dogs__pedigree-1st dogs__pedigree-img' src={dog.image} alt={dog.reg_name} />
            <div className='dogs__pedigree-2nd '>
            {parents &&
                parents.map((parent) => {
                    return (
                        // <img className='dogs__pedigree-img' src={parent.image} alt={parent.reg_name} />
                        <div>
                        {parent ? <p>{parent.reg_name}</p> : <p>Not tracked</p>}
                        </div>

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
