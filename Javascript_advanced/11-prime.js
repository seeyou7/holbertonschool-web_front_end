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
    for (let i = 2; i <= 100; i++){
        if(isPrime(i)){
            count++
        }
    }
    return count;

}

let startTime = performance.now();

setTimeout(() => {
    for (let i = 1; i <= 100; i++){
    countPrimeNumbers();
}
let endTime = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} miliseconds.`);

}, 0);