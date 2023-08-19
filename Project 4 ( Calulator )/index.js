let input = document.getElementById("input");
let buttons =  document.querySelectorAll("button");
let calculator = document.getElementById("cal");
let btn1 = document.getElementById("btn");
 

let string = "";

input.innerHTML = "Welcome to the calculator"
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click" , (e) => {
         
         if(e.target.innerHTML == "=") {
            string = "Ans :        "+eval(string);
            input.value = string;
            input.style.color="black";
            input.style.backgroundColor = "yellow";
        }
        else if(e.target.innerHTML == "info"){
            calculator.innerHTML = "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Made by KF Code King<br/><br/>Contact : 03420174813<br/> <br/>Developer : [ KHALID FAROOQ ] ";
            calculator.style.textAlign = "center";
            calculator.style.backgroundImage = 'url(calculator.jpg)';
            calculator.style.fontSize = "20px"
            calculator.style.backgroundSize = "cover";
            calculator.style.fontWeight = "500";
            calculator.style.textShadow = "2px 3px 4px yellow";
            calculator.style.border = "20px solid black";
             
             
        }
        else if (e.target.innerHTML == "AC")
        {
            string = "0";
            input.value = string;
            input.style.color = " white";
            input.style.backgroundColor  = "transparent";
        }
        else if (e.target.innerHTML == "DEL")
        {
            string = string.substring(0, string.length-1)
            input.value = string;
            input.style.color = " white";
            input.style.backgroundColor  = "transparent";
        }
        else {
            string+= e.target.innerHTML;
            input.value = string;
            input.style.color = " white";
            input.style.backgroundColor  = "transparent";
        }
    })
})