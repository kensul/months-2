const minusElem = document.querySelector(".minus")
const plusElem = document.querySelector(".plus")
const inputElem = document.querySelector("#input")

let num = 0;

function counter (){
    plusElem.addEventListener("click",() => {
        num++;
        inputElem.value = num
    });
    minusElem.addEventListener("click", () => {
        num--;
        inputElem.value = num
    })

}
counter()





