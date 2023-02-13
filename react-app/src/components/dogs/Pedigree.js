import React, {useState, useEffect} from 'react';
import PedigreeBuilder, {calculateGen} from '../../utils/pedigree';

const Pedigree = ({dogId}) => {
    const [dog, setDog] = useState({})
    const [maxGenerations, setMaxGenerations] = useState(4)
    // const [familyTree, setFamilyTree] = useState([])
    const [totalDogs, setTotalDogs] = useState(0)
    const [currentCount, setCurrentCount] = useState(0)

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
            const total = calculateGen(maxGenerations)
            setTotalDogs(total)
            setDog(data)
            const pedigree = buildPedigree(data)
            console.log(pedigree)
            // setFamilyTree(pedigree)
            // console.log(familyTree)
            // setTotalDogs(total)
        }
    })();

    }, [dog.id]);

    /* 
    take dog as param
    set dog as current node
    push dogs sire and dam to queue
    go to 1st item in queue - set to current node
    add it's sire and dam to queue - set as visited/ add to visted queue
    pop current node, move to next item, repeat previous steps

    during pop is when the dog should be added to the family tree
    need to figure out how to preserve null values in the family tree

    dog -> current node - update queue
            [sire, dam] --> current node = sire - update queue -> [sire, dam, sire, dam]
            pop sire from queue -> [dam, sire, dam] --> current node = dam - update queue -> [dam, sire, dam, sire, dam]
            pop dam from queue -> [sire, dam, sire, dam]

    NEED TO INCORPORATE MAX GENERATIONS
    after queue is empty need to manipulate teh family tree data to the pedigree 
    
    */ 
    const queue = []
    const familyTree = []

    const buildPedigree = (dog) => {
        let currentDog = dog;
        queue.push(currentDog?.sire, currentDog?.dam)
        familyTree.push(currentDog?.sire, currentDog?.dam)

        currentDog = queue.shift()
        if (!currentDog && queue.length > 0) {
            familyTree.push({})
            currentDog = queue.shift()
        }
        if(familyTree.length < totalDogs) {
            buildPedigree(currentDog)
        }
        console.log(familyTree)
        // const newTree = familyTree.slice(0, totalDogs)
        return familyTree.splice(0, totalDogs)
    }

  return (
    <>
    {dog && 
        <div className='dogs__pedigree'>
            <img className='dogs__pedigree-1st dogs__pedigree-img' src={dog.image} alt={dog.reg_name} />
            <div className='dogs__pedigree-2nd '>
                {/* {pedigree} */}
            </div>
        </div>
    }
    </>
  );
};

export default Pedigree;
