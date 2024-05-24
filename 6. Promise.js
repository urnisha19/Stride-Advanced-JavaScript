console.log('start')

const myPromise = new Promise((resolve, reject) => {
    const num = 5;
    if (num === 5) {
        resolve("Success");
    } else {
        reject("Error");
    }
});
myPromise.then((res) => console.log(res)) //condtion true hole resolve er response Success print korbe
    .catch(err => console.log(err)) //condtion true na hole resolve er response Error print korbe


const myPromise2 = new Promise((resolve, reject) => {
    const num = 5;
    if (num === 5) {
        resolve("Success 2");
    } else {
        reject("Error 2");
    }
});

// একাধিক প্রমিস হ্যান্ডল করা
Promise
    .all([myPromise, myPromise2])
    //.then((res) => console.log(res))
    .then(([promise1, promise2]) => console.log('promise 1', promise1, 'promise 2', promise2)) //response ke destructure kore deya hoyeche [promise1, promise2]
    .catch(err => console.log(err))

console.log('end')



