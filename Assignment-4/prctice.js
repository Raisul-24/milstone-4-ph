function canPay(changeArray, totalDue) {
        if(Array.isArray(changeArray) && changeArray.length === 0 || !Array.isArray(changeArray)){
                return "Something Error or No Money Here!!";
        }
        total =0;
        for(let i=0; i<changeArray.length; i++){
                total += changeArray[i];
        }
        if(total >= totalDue){
                return true;
        }
        else{
                return false;
        }
}


console.log(canPay([1,5,5],10));
console.log(canPay(0,10));
console.log(canPay([1,2,100],10));