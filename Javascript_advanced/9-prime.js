function isPrime(number){
    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}


function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 200; i++){
        if(isPrime(i)){
            count++
        }
    }
    return count;

}

let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} miliseconds.`);