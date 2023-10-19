//if divisible by 3 then op would be fizz, divisible by 5 ten op would be buzz
let number = 567;
        const rem = number%3;
        const remA = number%5;
        if(rem ===0 && remA===0 ){
            console.log("FizzBuzz");
            
        }
        else if (remA ===0)
        {
            console.log("Buzz");
            
        }
        else if( rem ===0){
            console.log("Fizz");
        }
        else{
            console.log(number);
        }
    