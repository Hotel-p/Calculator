const digits = document.querySelectorAll(".digit");
const equalBtn = document.querySelector(".equal");
const operatorBtn = document.querySelectorAll(".operation");
const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");
const clearBtn =  document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

let first = '';
let second = ''; 
let operator = null;

operatorBtn.forEach((operation) =>{
    operation.addEventListener('click', ()=>{
        if(first === ""){
            alert("Enter digit first");
        }
        else if(first !== "" && second !== "" && operator !== null){
            first = evaluate(first,second,operator);
            second = "";
            operator = operation.textContent;
            upper.textContent = first + " " + operator;
            lower.textContent = "";
        }
        else{
            operator = operation.textContent;
            upper.textContent = lower.textContent + " " + operator;
        }
    })
})

digits.forEach((button) => {
    button.addEventListener('click', ()=>{
        if(operator !== null){
            lower.textContent = "";
            second = second + button.textContent;
            lower.textContent = second;
        }
        else{
            first = first + button.textContent;
            lower.textContent = first;
        }
    });
});

equalBtn.addEventListener("click", ()=>{
    if(first === "" || second === "" || operator === null){
        alert("Enter digit first");
    }
    else{
        upper.textContent = upper.textContent + " " + lower.textContent + " =";
        first = evaluate(first,second,operator);
        second = "";
        operator = null;
        lower.textContent = first;
    }
});

clearBtn.addEventListener('click', ()=>{
    upper.textContent = "";
    lower.textContent = "";
    first = "";
    second = "";
    operator = null;
})

deleteBtn.addEventListener('click', ()=>{
    if(first !== "" && operator !== null && second !== "" ){
        lower.textContent = "";
        second = "";
    }
    else if(first !== "" && operator !== null){
        operator = null;
        upper.textContent = first;
    }
    else{
        first = "";
        lower.textContent = "";
        upper.textContent = "";
    }
})

function evaluate(first,second,operator){
    a = Number(first);
    b = Number(second);
    switch (operator){
        case "+":
            return a + b;
        case "-":
            return a - b;   
        case "/":
            return a / b;
        case "*":
            return a * b;
        }
}
