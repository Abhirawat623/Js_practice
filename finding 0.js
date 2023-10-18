

class Solution {

    countZeroes(arr, n) {
        let count =0;
       for(let i =0;i<n;i++){
           
           if(arr[i]===0){
               count++;
           }
          
       } return count;
        
    }
}