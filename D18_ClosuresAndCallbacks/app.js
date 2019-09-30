function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() {
        
        console.log(greeting);

    }, 3000); //no chrome ta bugando 3000ms

}

sayHiLater();

function tellMeWhenDone(cb){
    var a = 1000; 
    var b = 2000;

    cb();
}

tellMeWhenDone(function(){
    console.log('I am done')
})

tellMeWhenDone(function(){
    console.log('All done..')
})