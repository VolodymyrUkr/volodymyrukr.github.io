window.onload = function() {
    var i = 0;
    let currentString = 0;
    let strings = ["Wake up, Neo...", "Follow the white rabbit", "Heeeeere’s Johnny!", "Bond… James Bond.", "Beam me up, Scotty", "Продам гараж",
    "What is the meaning of life, the universe, and everything?", "42", "Wake the f*ck up, Samurai. We have a city to burn", "A martini… Shaken, not stirred.",
    "Say ‘hello’ to my little friend!"]
    var txt = strings[0]; 
    var speed = 75;
    let t = txt.length;

    function typeWriterDeleting() {
        if (t >= 0) {
            let string = document.getElementById("typewriter-input").innerHTML
            
            document.getElementById("typewriter-input").innerHTML = string.substring(0, t);
            t--;
            setTimeout(typeWriterDeleting, 20);
        }
        else {
            i = 0;
            typeWriter();
        }
    }
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewriter-input").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
      else {
        t = txt.length;
        if ((currentString + 1) < strings.length) {
            currentString++;
        } else {
            currentString = 0
        }        
        txt = strings[currentString];
        setTimeout(function(){
            typeWriterDeleting()
        }, 3000);
      }
    }
    typeWriter();

    document.getElementsByClassName("first")[0].onwheel = scrollScreen;

    function scrollScreen(event) {
        event.preventDefault();
      
        if (event.deltaY < 0) {
          
            document.getElementsByClassName("first")[0].classList.remove("hidden")
        }
        else {
            document.getElementsByClassName("first")[0].classList.add("hidden")
        }
      
        
      }


    
}
