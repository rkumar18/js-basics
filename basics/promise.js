const obj ={}
const promise = new Promise((resolve, reject) => {
        if(obj.user){
            resolve(console.log("user is loggedin")) 
        }else{
            reject(new Error("user not logged in"))
        }
        // if(obj.user){
        //     resolve(console.log("user is loggedin")) 
        // }else 
        // reject(new Error("user not logged in"))
});

promise.then(user => {
    console.log(user)
}).catch(err => console.log(err))