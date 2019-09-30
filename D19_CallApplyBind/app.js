var person = {
    firstname: 'Igor',
    lastname: 'Salgado',
    getFullName: function(){

        var fullname = this.firstname + ' ' + this.lastname
        return fullname;

    }
}

var logName = function(lang1, lang2){
    
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------------')
}

var logPersonName = logName.bind(person);

logPersonName('en')


logName.call(person, 'es', 'en')
logName.apply(person, ['es', 'en'])



function multiply(a, b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2))