async function iterateWithAsyncAwait(t) {
    for (let i of t) {
        await new Promise(resolve => {
            setTimeout(() => {
                console.log(i);
                resolve();
            }, 2000);
        });
    }
}

const { isUtf8 } = require('buffer');
const { error } = require('console');
//iterateWithAsyncAwait([1, 2, 5, 8, 6, 1, 87, 6]);

const fs = require('fs')

async function awaitCall() {
    const data = await fs.promises.readFile('./data.json', 'utf8')
    const parsedData = JSON.parse(data)
    console.log(parsedData)
}

//awaitCall()

async function HandlingErrors () {
    try{
        const data = await fs.promises.readFile('./data.json', 'utf8')
    const parsedData = JSON.parse(data)
    console.log(parsedData)
    }catch(error){
        console.error('check your data again',error)
    }
}
//HandlingErrors()

async function chainedAsync() {
    await new Promise(resolve =>{
        setTimeout(() => {
            console.log('Hello');
            resolve();
        }, 1000) 
        
    })
    await new Promise(resolve =>{
        setTimeout(() => {
            console.log('beautiful');
            resolve();
        }, 1000) 
        
    })
    await new Promise(resolve =>{
        setTimeout(() => {
            console.log('world');
            resolve();
        }, 1000) 
        
    })
    
}

//chainedAsync()

async function concurrentRequests() {
    Promise.all([
        fs.promises.readFile('./data.json', 'utf8'),
        fs.promises.readFile('./data.json','Utf8')
    ]).then(([res1,res2])=>{
        console.log(JSON.parse(res1));
        console.log(JSON.parse(res1));

    }).catch((err)=>{
        console.error(err);
    })
    
}

concurrentRequests()