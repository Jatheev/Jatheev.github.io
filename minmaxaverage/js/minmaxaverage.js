

const arr = [70, 65, 3, 21, 58, 93, 12, 82, 15, 34, 73, 2, 12];

let min = (array,min = array[0]) =>{
    for(let i = 0;i < array.length;i++){
        if(min > array[i]) min = array[i];
    }
    return min;
};

let max = (array,max = array[0]) =>{
    for(let i = 0;i < array.length;i++){
        if(max < array[i]) max = array[i];
    }
    return max;
};


let avg = (array,avg = array[0]) =>{
for (let i = 0; i <array.length; i ++){
    let avg = array [i]
    avg += avg;
}
avg = avg / array.length
return avg;

}

console.log(" Minimum Value of An Array Element is " + min(arr));
console.log(" Maximum Value of An Array Element is " + max(arr));
console.log(" Average Value of An Array Element is " + avg(arr));
