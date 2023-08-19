var a = document.querySelector(".jobs")
var b = document.querySelector(".btn")
var c = document.querySelector(".web")
var name11 = document.querySelector(".name11")


b.addEventListener("click", function () {
    a.innerHTML = "Applied successfully";
    a.style.fontSize = "23px"
    a.style.color = "yellow";
    a.style.marginBottom = "30px"
    a.style.textAlign = "center";
    a.style.padding = "3px 150px";
    a.style.marginLeft = "50px";
    a.style.backgroundColor = "black";
    c.innerHTML = "";
    a.style.duration = "2s"
    b.innerHTML = " "
    b.style.marginTop = "400px"
    b.style.backgroundColor = "transparent"
    b.style.color = "yellow"
    a.style.boxShadow = "2px 2px 10px yellow , -2px -2px 10px yellow"
    name11.style = "disabled"
})

