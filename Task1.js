// Task 1:

const objectOne = {
    heigth: 300,
    widht: 200,
    color: 'red'
}

function getKeysFn (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}, ${obj[key]}`)
        }
    }
    
}

getKeysFn (objectOne)
