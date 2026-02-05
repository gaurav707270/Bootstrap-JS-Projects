let currentValue = "";   // number being typed
let previousValue = "";  // stored number
let operator = "";       // + - * /

const button = document.querySelectorAll("button");

const display = document.getElementById("display");

button.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        handle_click(btn.innerText);
    });
});

 function handle_click(value){
    if(!isNaN(value) || value === "."){
        currentValue += value;
        display.innerText = currentValue;
    }
    else if ( value =="AC"){
        clearAll();
    }
    else if (value === "="){
        calculate();
    }
    else{
        set_Operator(value);
    }
}

function set_Operator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";

}

function calculate(){
  let result;

  let prev = parseFloat(previousValue);
  let curr = parseFloat(currentValue);

  if (operator === "+") result = prev + curr;
  if (operator === "-") result = prev - curr;
  if (operator === "*") result = prev * curr;
  if (operator === "/") result = prev / curr;

  display.innerText = result;
  currentValue = result;
  operator = "";
}

function clearAll(){
  currentValue = "";
  previousValue = "";
  operator = "";
  display.innerText = "0";
}

