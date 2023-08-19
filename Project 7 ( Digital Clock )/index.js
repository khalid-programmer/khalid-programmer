var buttons = document.getElementsByTagName('button');
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "Time"){
            console.log(e.target);
            function  showtime() {
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                var s = d.getSeconds();
                if(h>=12)
                h=h-12;
                if(h<10)
                h = "0"+h;  
                if(m<10)
                m = "0"+m;
                if(s<10)
                s = "0"+s;
                if (h>= 12)
                h= h + " PM";
                var time = h+ " : " + m +" : "+s + " AM" ;
                var timee = document.getElementsByTagName('h1')[0];
                timee.innerHTML = time;
                setInterval(showtime , 1000);
            }
            showtime();
              
        }
        else if(e.target.innerHTML == "Date"){
            function date(){
            var dat = new Date();
            document.getElementsByTagName('h1')[0].innerHTML = dat;
            
            
            }
            date();
        }

        else if(e.target.innerHTML == "Check Milisecond"){
            function mili(){
            var mil = new Date();
            var sss = mil.getSeconds();
            var mmm = mil.getMilliseconds();
            nmil = sss +"  ----  VS  ----   "+mmm;
            var datt = document.getElementsByTagName('h1')[0] ;
            datt.innerHTML = nmil;

            setInterval(mili , 0.5000);
            
            }
            mili();
        }

        else if(e.target.innerHTML == "info"){
            document.getElementsByTagName('h1')[0].innerHTML = "Developer : <br> [ Khalid farooq ]";
        }

        else
        {
            function call(){
            document.getElementsByTagName('h1')[0].innerHTML = "Khalid's Watch";
            
        setInterval(call, 30000)
        }
        call();
        }
    })
})
