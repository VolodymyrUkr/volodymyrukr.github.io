window.onload = function() {
    var i = 0;
    let currentString = 0;
    let strings = ["Wake up, Neo...", "The Matrix has you...", "Follow the white rabbit...", "Knock knock Neo...", "Heeeeere’s Johnny!", "Bond… James Bond.", 
    "Beam me up, Scotty", "Продам гараж","What is the meaning of life, the universe, and everything?", "42", "Wake the f*ck up, Samurai. We have a city to burn", 
    "A Martini… Shaken, not stirred.", "Say ‘hello’ to my little friend!"]
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
            currentString = 0;
        }        
        txt = strings[currentString];
        setTimeout(function(){
            typeWriterDeleting()
        }, 3000);
      }
    }
    typeWriter();

    document.getElementsByClassName("nextPage")[0].onclick = firstNextPage;
    document.getElementsByClassName("first")[0].onwheel = firstNextPage;
    function firstNextPage() {
        document.getElementsByClassName("first")[0].classList.add("slowFade");
        document.getElementsByClassName("second")[0].classList.add("slowAppear");

                setTimeout(function(){
                    document.getElementsByClassName("first")[0].classList.add("hidden");
                    document.getElementsByClassName("second")[0].classList.remove("hidden");
                    document.getElementsByClassName("first")[0].classList.remove("slowFade");
                }, 1500)
    }



    document.getElementsByClassName("nextPage")[1].onclick = () => {
        document.getElementsByClassName("second")[0].classList.add("slowFade");
                setTimeout(function(){
                    document.getElementsByClassName("second")[0].classList.add("hidden");
                    document.getElementsByClassName("third")[0].classList.remove("hidden");
                }, 2000)
    }



    
    document.getElementsByClassName("second")[0].onwheel = scrollScreen;

    function scrollScreen(event) {
        console.log(event);
        event.preventDefault();
      
        if (event.deltaY < 0) {
            document.getElementsByClassName("second")[0].classList.add("slowFade");
            setTimeout(function(){
                document.getElementsByClassName("second")[0].classList.add("hidden");
                document.getElementsByClassName("first")[0].classList.remove("hidden");
                document.getElementsByClassName("second")[0].classList.remove("slowFade");
            }, 2000)
        }
        else {
            if (event.target.classList.contains("first")) {
                document.getElementsByClassName("first")[0].classList.add("slowFade");
                setTimeout(function(){
                    document.getElementsByClassName("first")[0].classList.add("hidden");
                    document.getElementsByClassName("second")[0].classList.remove("hidden");
                    document.getElementsByClassName("first")[0].classList.remove("slowFade");
                }, 2000)
            } else {
                document.getElementsByClassName("second")[0].classList.add("slowFade");
                setTimeout(function(){
                    document.getElementsByClassName("second")[0].classList.add("hidden");
                    document.getElementsByClassName("third")[0].classList.remove("hidden");
                }, 2000)
            }
        }
      
        
      }
    // function scrollScreenOnScroll(event) {
    //     loop();
    // }


    // let scroll = window.requestAnimationFrame;

    // let elementsToShow = document.querySelectorAll('.show-on-scroll');

    // function loop() {

    //     elementsToShow.forEach(function (element) {
    //         if (isElementInViewport(element)) {
    //         element.classList.add('is-visible');
    //         } else {
    //         element.classList.remove('is-visible');
    //         }
    //     });

    //     //scroll(loop);
    // }


    // function isElementInViewport(el) {
    // // special bonus for those using jQuery
    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //     el = el[0];
    // }
    // var rect = el.getBoundingClientRect();
    // return (
    //     (rect.top <= 0
    //     && rect.bottom >= 0)
    //     ||
    //     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    //     ||
    //     (rect.top >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    // );
    // }

    // //loop();
}
