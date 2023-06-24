// Task 2:

let color = 'orange';

const objectTwo = {
    height: 500,
    width: 800,
    color: 'orange'
};

function getNameFn (str, obj) {
   return str in obj
}

console.log(getNameFn('color', objectTwo))