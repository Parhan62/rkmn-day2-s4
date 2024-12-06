// function FizzBuzz(){
//     for (i = 1; i < 101; i++){
//         if (i % 15 == 0){
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 == 0){
//             console.log("Fizz");
//         }
//         else if (i % 5 == 0){
//             console.log("Buzz");
//         }
//         else{ 
//             console.log(i);
//         }
//     }
//     // for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
// }

// // FizzBuzz()


// // const DAYS = ['sunday', 'monday', 'thuesday']
// // const daysMix = ['wednesday', 3, true]

// // // console.log(daysMix)

// // // DAYS.push('wednesday')
// // // DAYS.pop('monday')

// // // console.log(DAYS)

// // for (let i = 0; i<DAYS.length; i++){
// //     console.log(DAYS[i])
// // }

// // DAYS[0]='senin'
// // console.log(DAYS)

// function bubbleSort(arr){
//    let n = arr.length
//    for (i=0;i<n;i++){
//      for (j=0;j<(n-i-1);j++){
//       if (arr[j] > arr [j+1]){
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//      }
//    }
// }
// // arr = [ 23, 42, 435, 334, 23, 12, 246, 1, 34, 9, 98, 4]
// let arr = [];
// for (let i = 0; i < 10; i++) { 
//    arr.push(Math.floor(Math.random() * 100)); 
// }

// bubbleSort(arr)

// // console.log(" Sorted array is: ")
// // // for (i=0;i<arr.length;i++){
// // //    console.log(arr[i] + '')
// // // }
// // console.log(arr.join(' '));

// let total = 0;
// let avg = 0;
// let min = arr[0];
// let max = arr[0];

// for(let i = 0; i < arr.length; i++){
//     total = total + arr[i];
//     if (max <= arr[i]){
//         max = arr[i]
//     }
//     if (min >= arr[i]){
//         min = arr[i]
//     }
// }

// avg = total/arr.length;

// console.log(total, avg, min, max)
// console.log(`Total: ${total}`)
// console.log(`Average: ${avg}`)
// console.log(`Min: ${min}`)
// console.log(`Max: ${max}`)

import Animal from "./Animal.js";
import Mammal from "./mammal.js";
const elephant = new Animal('gajah', 'herbivore', 100, true, 100)
const tiger = new Animal('macan', 'carnivore', 50, true, 19)
tiger.name = 'tiger' //change name with something
const orangutan = new Mammal('orangutan', 'omnivore', 80, true, 21);

// console.log(elephant.food)
console.log(orangutan.isAdult())
console.log(tiger.isAdult())


























