const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('task one is completed')
    })
}
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task two is completed')
        }, 3000)
    })
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Task three is rejected')
        }, 2000)
    })
}

//taskOne, taskTwo, taskThree function gulor return value ekti function er vitor t1, t2, t3 variable e store 
// function show() {
//     const t1 = taskOne()
//     console.log(t1)
//     const t2 = taskTwo()
//     console.log(t2)
//     const t3 = taskThree()
//     console.log(t3)
// }
// show()

// async function show() {
//     const t1 = await taskOne()
//     console.log(t1)

//     const t2 = await taskTwo()
//     console.log(t2)

//     const t3 = await taskThree()
//     console.log(t3)
// }
// show()

async function show() {
    try{
        const t1 = await taskOne()
        console.log(t1)
    
        const t2 = await taskTwo()
        console.log(t2)
    
        const t3 = await taskThree()
        console.log(t3)
    }
   catch(error){
    console.log("error: ", error)
   }
}
show()
