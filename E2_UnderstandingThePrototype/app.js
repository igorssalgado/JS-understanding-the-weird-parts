var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var igor = {
    firstname: 'Igor',
    lastname: 'Salgado'
}


//dont do this ever
igor.__proto__ = person;
console.log(igor.getFullName())