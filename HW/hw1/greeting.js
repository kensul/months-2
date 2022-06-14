const name = prompt()
console.log('hello ' + name);

const arr1 = [1,2,'fdsdf',3,4,5];
const arr2 = ['sjflksd', 232,2,4];
if (arr1.length > arr2.length){
    console.log('первый массив больше');
} else if(arr1.length < arr2.length){
    console.log("второй массив больше");
} else {
    console.log('они равны');
}


const colors = 'red';
switch (colors) {
    case "green":
        console.log('зеленый свет');
        break;
    case 'red':
        console.log('красный');
        break;
    case 'yellow':
        console.log('yellow');
        break;
}
const arr5 = [[[[[[[[[[[[[[5]]]]]]]]]]]]]]
console.log(arr2[0][0][0][0][0][0][0][0][0][0][0][0][0][0])