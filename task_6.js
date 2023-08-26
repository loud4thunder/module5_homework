let arr = ['a', 'a', 'a'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Массив одинаковых элементов");
} else {
    console.log("Массив различных элементов");
}