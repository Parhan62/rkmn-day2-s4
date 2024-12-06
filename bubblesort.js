function bubbleSort(arr){
    let n = arr.length
    for (i=0;i<n;i++){
      for (j=0;j<(n-i-1);j++){
       if (arr[j] > arr [j+1]){
         var temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j + 1] = temp
       }
      }
    }
 }

 let arr = [];
 for (let i = 0; i < 10; i++) { 
    arr.push(Math.floor(Math.random() * 100)); 
 }
 
 bubbleSort(arr)
 
 console.log(" Sorted array is: ")

 console.log(arr.join(' '));
 