const mergeArray = (leftArray, rightArray) => {
    var r= 0;
    var l = 0;
    var results = [];

    while(l < leftArray.length && r < rightArray.length){
        if(leftArray[l] <= rightArray[r]){
            results.push(leftArray[l]);
            l++;
        }else{
            results.push(rightArray[r]);
            r++;
        }
    }

    while(l < leftArray.length){
        results.push(leftArray[l])
        l++
    }

    while(r < rightArray.length){
        results.push(rightArray[r])
        r++
    }

    return results;

}

const mergeSort = (array) => {
    if(array.length <= 1){
        return array;
    }
    

    var middle = Math.floor(array.length/2);
    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle);
    return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([2, 0, 1, 4, 2, 5, 5, 8, 234, 123, 7, 8, 44, 22]));