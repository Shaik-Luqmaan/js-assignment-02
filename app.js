// ASync / Await 
/*
1. An async function is a function declared with the async keyword.
2. Making a function async will return a promise.
3. Async functions can contain zero or more await expressions. 
4. await will suspend the progress till the promise is resolved.

Advantages:

1. It makes promises easier to work with.
2. It is Asynchronous code but behave more like synchronous code.
*/

async function getData(uId) {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('skc@gmail.com'),4000);
       })

        const err = false;

    if(!err){
        const res = await promise; //wait untill promised is resolved (4 seconds)
        return res;
    }
    else{
        await promise.reject(new Error('Something went wrong'));
    }

}

console.log("start");
getData("id")
.then(res => console.log("Email of the user is:" + res));
console.log("end");