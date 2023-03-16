function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error =true;
            if(!error){
                console.log('function: your promise has been resolved')
                resolve();
            }
            else{
                console.log('function: yor promise has not been resovled')
                reject('sorry not fulfilled');
            }
        },2000);
    })
}
func1().then(function(){
    console.log("pc: thanks for resovling")
}).catch(function(){
    console.log("very very bad bro")
})