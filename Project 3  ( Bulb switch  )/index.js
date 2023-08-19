var a = document.querySelector(".main");
var text = document.querySelector(".text");
var btn_off = document.querySelector(".btn");
var btn_on = document.querySelector(".btnn");
var khalid = document.getElementById("bottom-text");
 var mybody = document.querySelector("#boddy");

btn_on.addEventListener("click", function () {
    a.style.backgroundColor = "yellow";
    text.innerHTML = "ON";
    a.style.boxShadow = "5px 10px 1000px yellow ,-5px -10px 1000px yellow";
    btn_on.style.border = "3px solid white";
    btn_on.style.backgroundColor = "red";
    btn_on.style.color = "white";
    btn_off.style.backgroundColor = "black";
    btn_off.style.border = "0px solid yellow";
    btn_off.style.color = "yellow";
    khalid.innerHTML = " [ Khalid Developer ]  <br>  University of Agriculture ";
    khalid.style.textShadow = "  5px 5px 30px rgb(0, 0, 0,0.3)";
    khalid.style.backgroundColor = "aqua";
    mybody.style.background = " back";


})
btn_off.addEventListener("click", function () {
    a.style.backgroundColor = "transparent";
    a.style.boxShadow = "5px 10px 1000px white ,-5px -10px 1000px white";
    text.innerHTML = "OFF";
    btn_off.style.border = "3px solid white";
    btn_off.style.backgroundColor = "red";
    btn_off.style.color = "white";
    btn_on.style.border = "0px solid black";
    btn_on.style.backgroundColor = "black";
    btn_on.style.color = "yellow";
    khalid.innerHTML = "";
    khalid.style.backgroundColor = "transparent";

})