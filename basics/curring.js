let multiply = function(x,y){
    console.log(x*y)


}

let multiplybytwo =multiply.bind(this, 2)//now this is called curring here 2 is parmanent parameter of multiply by two
multiplybytwo(5)

let multiplybythree =multiply.bind(this, 3)//now this is called curring here 2 is parmanent parameter of multiply by two
multiplybythree(5)
    