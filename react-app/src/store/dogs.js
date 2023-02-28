// const ADD_DOG = 'dog/ADD_DOG';

// const setDog = (dog) => ({
//     type: ADD_DOG,
//     payload: dog
// })

export const addDog = (dog) => async (dispatch) => {
    const response = await fetch('/api/dogs/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dog
        })
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data)
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

