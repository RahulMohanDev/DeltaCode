function arrayProperties(arr1, arr2) {
    let arr3 = arr2.concat(arr1);
    arr3.push(arr2);
    console.log(arr3);
  
    arr3.pop();
    console.log(arr3.reverse());
  
    let orangeIndex = arr3.lastIndexOf("orange");
    console.log(orangeIndex);
  
    let slicedArr3 = arr3.slice(0, 3);
    console.log(slicedArr3.length);
    let arrayText = slicedArr3.join();
    console.log(arrayText);
}