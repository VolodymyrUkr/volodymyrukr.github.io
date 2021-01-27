window.onload = function() {
    var i = 0;
    let currentString = 0;
    let strings = ['Wake up, Neo...', 'Follow the white rabbit', 'Beam me up, Scotty', 'What is the meaning of life, the universe, and everything?',
    '42', 'Wake the f*ck up Samurai. We have a city to burn']
    var txt = strings[0]; 
    var speed = 75;
    let t = txt.length;

    function typeWriterDeleting() {
        if (t >= 0) {
            let string = document.getElementById("typewriter-input").innerHTML
            
            document.getElementById("typewriter-input").innerHTML = string.substring(0, t);
            t--;
            setTimeout(typeWriterDeleting, 30);
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
}
