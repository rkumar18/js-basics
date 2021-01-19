let userName = 'apptunix'
let password = '1234555'

//const len = password.length
// if(len<6){
//     console.log('you have to enter a password having length more then 6 ')
// }else{
//     console.log('welcome to our home page')
// }
let userValidate = function(mystring){
    if(mystring.length > 6 && mystring.includes('@')){
        return true
    }
    return false
}


let passValidate = function(mystring){
    if(mystring.length > 6){
        return true
    }
    return false
}
// console.log(userValidate(userName))
// console.log(passValidate(password)

if(userValidate(userName) && passValidate(password)) {
    console.log('Welcome')
}else{
    console.log('wrong username or password')
}

