window.onload = function() {
    var i = 0;
    var txt = 'Wake up, Neo...'; 
    var speed = 75;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewriter-input").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
}
