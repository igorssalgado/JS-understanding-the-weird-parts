var a = 3;
var b;

b = a;
a = 2;

console.log(a)
console.log(b)

////////////////
var c = { greeting: 'hi' }
var d;

d = c;
c.greeting = 'hello'

console.log(c)
console.log(d)
////////////////////
function changeGreeting(obj){
    obj.greeting = 'hola'
}

changeGreeting(d)
console.log(c)
console.log(d)