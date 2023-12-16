// 17>>>1
// var fruits=['Apple','banana','Orange'];
// var pos=fruits.indexOf('banana');
// console.log(pos);
// fruits['1']="Mango";
// console.log(fruits);

// var rm = fruits.pop();
// console.log(fruits);

// var ad = fruits.push("Watermelon");
// console.log(fruits);


// 17>>>2

// var score= 89;
// if(score>=80){
//         console.log("A");
// }
// else if(score >=60 && score<80){
//         console.log("B");
// }
// else if(score >=50 && score<60){
//         console.log("C");
// }
// else if(score >=40 && score<50){
//         console.log("D");
// }
// else if(score >=0 && score<40){
//         console.log("F");
// }
// else{
//         console.log("Error!");
// }


//  17>>3
// var a,b,c;
// a=7;
// b=10, c=9;
// if(a>b && a>c){
//         console.log("largest value ",a);
// }
// else if(b>a && b>c){
//         console.log("Largest",b);
// }
// else if(c>a && c>b){
//         console.log("Largest",c);
// }


// 17>>>3
// var a,b,c;
// a=8, b=10, c=18;
// if(a==b || a==c){
//         console.log("isoscles");
// }
// else if(b==a || b==c){
//         console.log("isoscles");
// }
// else if(c==b || c==a){
//         console.log("isoscles");
// }
// else{
//         console.log("Not issoles");
// }


// 18.1
// for(i=1;i<=39;i++){
//         console.log(i+" : Ajke amr mon valo nai");
// }
// for(i=58;i<=98;i++){
//         console.log(i);
// }

// for(i=412;i<=456;i++){
//         if(i%2==0){
//                 console.log("even: ",i);
//         }
// }

// for(i=412;i<=456;i++){
//         if(i%2==0){
//                 console.log("even: ",i);
//         }
// }

// var arr=[0,1,5,2,1,7,0,6,4,3,2];
// var i=0;
// while(i<arr.length){
//         i++;
//         console.log(arr[i]);
// }

// for(i=30;i<=86;i++){
//         console.log(i);
//         if(i==44){
//                 break;
//         }
//         console.log(i);
// }

// var price=180;
// if(price>=200){
//         console.log("High");
// }
// else{
//         console.log("Low");
// }




//  20.2

// function inchToFeet(inch){
//         var feet=inch/12;
//         return feet;
// }
// var rahim=126732;
// var feet=inchToFeet(1209921);
// console.log(feet.toFixed(1));



// function kiloToMeter(miles){
//         const km=miles*1.6;
//         return km;
// }
// console.log("KM: ",kiloToMeter(100));



// function even(no){
//         if(no%2==0){
//                 return true;
//         }
//         else{
//                 return false;
//         }
// }
// console.log(even(101));


// arr =[23,45,2,54,445,5];
// let sum=0;
// for(i=0;i<arr.length;i++){
//         sum+=arr[i];
// }
// console.log(sum); 




        // if(arr[i] % 2==0){
        //         console.log(i,arr[i]);
        // }
// arr =[1,2,3,4,45,5,6,776,86,99,9,98,998,80,6,4,33,2,54,99,77];
// var sum =0;
// for(i=0;i<arr.length;i++){

//         if(arr[i] % 2!=0){
//                 sum+=arr[i];
//                 console.log(i,arr[i]);
//                 console.log("Sum of all odd no in array:",sum);
//         }
// }



// function factorial(number){
//         var result= 1;
//         for(i=1;i<=number;i++){
//                 result*=i;
//         }

//         return result;
// }
// console.log(factorial(7));





// 21
// var a="RAISUL Islam Hridoy";
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());

// var a="Raisul Islam Hridoy,Student of Daffodil International university, department of CSE ,Ashulia,Dhaka-1216."
// console.log(a.includes("of"));
// console.log(a.indexOf("CSE"));
// console.log(a.startsWith('Raisul'));
// console.log(a.endsWith('Dhaka-1216.'));
// console.log("Komar por sentence alada korbe",a.split(','));  
// console.log("Word alada korbe",a.split(' '));  
// console.log("letter alada korbe",a.split(''));  



// console.log(Math.pow(2,3));




function maxInArray(number){
        let largest=number[0];
        for(i=0;i<=number.length;i++){
                if(number[i]>largest){
                        largest=number[i];      
                }   
        }
        
        return largest;
}
var highest=[12,35,3,445,323,2422,9034,09];

console.log(maxInArray(highest));