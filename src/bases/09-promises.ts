const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //!QUIERO MI DINERO!!
        resolve(100)
        //reject("my friend lost")
    }, 2000); //2segundos
})

myPromise.then((myMoney) => {
    console.log(myMoney)
}).catch((reason) => {
    console.log(reason)
}).finally(() => {
    console.log("continue with my life")
})