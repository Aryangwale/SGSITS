let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("a-promise done")
        }, 5000);
    })
}
let b = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("b-promise done")
            reject("b-rejected")
        }, 3000);
    })
}
let c = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("c-promise done")
            // reject("c-rejected")
        }, 1000);
    })
}

Promise.all([a(),b(),c()]).then(result=>{
    result.map(x=>{
        console.log(x)
    })
}).catch(err=>{
    console.log(err)
})


// Promise.allSettled([a(),b(),c()]).then(result=>{
//     console.log(result)
// })