function nums(num1, num2) {
    if (num1 < num2) {
        console.log("Первый аргумент меньше!")
    }else if (num1 > num2) {
        console.log("Второй аргумент меньше!")
    }
}
const num = {
    num1: 5,
    num2: 10
}
nums(num.num1, num.num2)



function countChar (str) {
    console.log(str.length)
}
countChar("234")

