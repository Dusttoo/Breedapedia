import React, {useState, useEffect} from 'react';

const Pedigree = ({dogId}) => {
    const [dog, setDog] = useState(null)
    const [parents, setParents] = useState()
    // const [generation, setGeneration] = useState(0)
    const [maxGenerations, setMaxGenerations] = useState(4)
    const [queue, setQueue] = useState([])
    // const [familyTree, setFamilyTree] = useState([])

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

    const calculateGen = () => {
        let totalDogs = 1;
        let thisGeneration = 1
        for(let i=0; i < maxGenerations; i++) {
            thisGeneration = thisGeneration * 2
            totalDogs += thisGeneration
        }
        return totalDogs
    }

    const getFamilyTree = (dog) => {
        const familyTree = [{'dog': dog, 'generation': 0}]
        let currentCountDogs = 0
        const totalNumDogs = calculateGen()

        while (currentCountDogs < totalNumDogs) {
            console.log(familyTree[currentCountDogs].dog?.reg_name)
            familyTree.push({'dog': familyTree[currentCountDogs].dog?.sire, 'generation': Math.ceil(totalNumDogs)})
            familyTree.push({'dog': familyTree[currentCountDogs].dog?.dam, 'generation': Math.round(totalNumDogs)})
            currentCountDogs += 2
            console.log(currentCountDogs)
        }

        console.log('tree: ', familyTree)
        return familyTree
    }

    if(dog) getFamilyTree(dog)

  return (
    <>
    {dog && 
        <div className='dogs__pedigree'>
            <img className='dogs__pedigree-1st dogs__pedigree-img' src={dog.image} alt={dog.reg_name} />
            <div className='dogs__pedigree-2nd '>
            {/* {parents && */}
                {getFamilyTree(dog).map((parent) => {
                    return (
                        // <img className='dogs__pedigree-img' src={parent.image} alt={parent.reg_name} />
                        <div>
                        {parent.dog ? <p>{parent.dog.reg_name}</p> : <p>Not tracked</p>}
                        </div>

                    )
                })}
            {/* } */}
            </div>
        </div>
    }
    </>
  );
};

export default Pedigree;
