var person = [
    {
        firstname: 'Igor',
        lastname: 'Salgado',
        addresses: [
            '111 main st',
            '222 other st'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '11231 main st',
            '233 other st'
        ],
        greet: function(){
            return 'Hi ' + this.firstname;
        }
    }
]

// how to use greet function on [0]?
person[0].greet = person[1].greet
console.log(person[0].greet())
console.log(person[1].greet())
