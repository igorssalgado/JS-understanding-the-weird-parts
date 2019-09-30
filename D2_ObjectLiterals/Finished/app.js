// var Tony = { 
//     firstname: 'Tony', 
//     lastname: 'Alicea',
//     address: {
//         street: '111 Main St.',
//         city: 'New York',
//         state: 'NY'
//     }
// };

// function greet(person) {
//     console.log('Hi ' + person.firstname);
// }

// greet(Tony);

// greet({ 
//     firstname: 'Mary', 
//     lastname: 'Doe' 
// });

// Tony.address2 = {
//     street: '333 Second St.'
// }


var person = {
    firstname: 'Igor',
    lastname: 'Salgado',
    address: {
        street: '123 St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person){
    console.log('Hi ' + person.firstname + ' ' + person.lastname)
    console.log('Hi ' )
}

greet(person);
greet({firstname: 'Jonas', lastname: 'Broder'})

