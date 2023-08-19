 var buttons = document.getElementsByTagName('button');
 var mybody = document.getElementById('mebody');
 var cards = document.getElementById('card-container')
 var header = document.getElementById('head');
 var footer = document.getElementById('third-footer');
  
 var arr = Array.from(buttons);
 arr.forEach(button => {
    button.addEventListener("click" , (e) => {
    if(e.target.innerHTML == "Day") {
            mybody.style.backgroundColor = "white";
            mybody.style.color = "black"; 
            button.style.backgroundColor = "black";
            button.style.color = "white";
            buttons[1].style.backgroundColor = "white"
            buttons[1].style.color = "black";
            header.style.textShadow = "2px 2px 5px rgb(0, 0, 0 , 0.5)";
            footer.style.background = " rgb(192, 235, 182)";
            footer.style.color = "black";
        }
        else if(e.target.innerHTML == "Night")
        {
             
            footer.style.background =  '  linear-gradient(40deg,  yellow   , rgb(0, 0, 0) , rgb(39, 39, 179,0.5),rgb(72, 28, 28), rgb(73, 171, 3))';
            footer.style.color = "white";
            mybody.style.backgroundColor = "black";
            mybody.style.color = "white";
            button.style.backgroundColor = "black";
            button.style.color = "white";
            buttons[0].style.backgroundColor = "white"
            buttons[0].style.color = "black";
            cards.style.boxShadow = '10px 10px 40px rgb(238, 231, 231, 0.5)';
            header.style.textShadow = " 1px 1px 20px rgb(239, 235, 235 , 20)";
             
        }

        else {
            mybody.style.color = "black";
        }

    })
 })
 