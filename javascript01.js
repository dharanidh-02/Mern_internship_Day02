
/*let i = 0;

/*while (i <= 10) {
    console.log(i)
    if (i == 5) continue;
    i++;
}

const arr = [100, false, "dharan", 19];

/*arr[0] = "dharan";
arr[1] = 19;

const b = [...arr]; // the data present in arr is copied to b

console.log(b);
console.log(arr); */ // output : [ 'dharan', 19 ]

//if else ig else
/*const data = {
    name: "dharan",
    age: {
        student1: 20,
        game: {
            cricket: 29
        }
    }
}

console.log(data); // output :{name: 'dharan', age: {…}}
console.log(data.age); // output :{student1: 20, game: {…}}
console.log(data.age.game); // output :{cricket: 29}
console.log(data.age.game.cricket); // output :29*/

/*function cli() {
    const heading = document.getElementById("data");
    heading.innerHTML = "<i>DD</i>";
    heading[1].innerHTML = "dd";
    heading[2].innerText = "dharan"
}*/


/*function cli() {
    const heading = document.getElementById("data");

    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = i;
    }
    heading.innerText = arr;
}
*/
/*let a = 0;
const arr = () => {
    const heading = document.createElement("h1");
    heading.innerText = "dharan";
    //<h1> dharan </h1>
    const cont = document.getElementById("container"); //to print the element into the div tag
    cont.appendChild(heading);

}*/
/*
document.addEventListener("click", () => {
    console.log("I Hate Surya!!!")
})*/

/*const col = function () {
    const div = document.getElementById
        ("cont")
    
    div.style.backgroundColor = "blue";
}*/



const calculator = () => {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById("result").value = result;
}