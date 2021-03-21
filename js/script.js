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
    function firstNextPage(event) {
        event.preventDefault();
        document.getElementsByClassName("first")[0].classList.add("slowFade");
        document.getElementsByClassName("second")[0].classList.add("slowAppear");

                setTimeout(function(){
                    document.getElementsByClassName("first")[0].classList.add("hidden");
                    document.getElementsByClassName("second")[0].classList.remove("hidden");
                    document.getElementsByClassName("first")[0].classList.remove("slowFade");
                }, 1500)
    }



    document.getElementsByClassName("nextPage")[1].onclick = secondNextPage;
    document.getElementsByClassName("second")[0].onwheel = secondNextPage;
    
    function secondNextPage(event) {
        console.log(event.deltaY);
        event.preventDefault();
        if (event.deltaY > 0 || event.deltaY === undefined) {
            document.getElementsByClassName("second")[0].classList.remove("slowAppear");
            document.getElementsByClassName("second")[0].classList.add("slideUp");
            document.getElementsByClassName("third")[0].classList.add("slideUpThird");

                    setTimeout(function(){
                        document.getElementsByClassName("second")[0].classList.add("hidden");
                        document.getElementsByClassName("third")[0].classList.remove("hidden");
                        document.getElementsByClassName("second")[0].classList.remove("slowFade");
                    }, 1000)
        }
    }



    
    // document.getElementsByClassName("second")[0].onwheel = scrollScreen;

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

    const portfolioArray = document.getElementsByClassName("portfolio-position");

    [...portfolioArray].forEach(element => {
        element.onclick = (event) => {
            [...portfolioArray].forEach(element => {
                element.classList.remove("clicked");
            });
            event.currentTarget.classList.add("clicked");
            let eventCurrentTarget = event.currentTarget;
            let background = document.getElementsByClassName("fullscreen-portfolio-background")[0];
            let currentTarget = event.currentTarget.getBoundingClientRect();
            console.log(`left: ${currentTarget.left}px; top: ${currentTarget.top}px; width: ${currentTarget.width}px; height: ${currentTarget.height}px;`);
            background.style.cssText = (`left: ${currentTarget.left}px; top: ${currentTarget.top}px; width: ${currentTarget.width}px; height: ${currentTarget.height}px; opacity: 1;`)
            //background.classList.add("fullscreen");
            setTimeout(function(){
                document.getElementsByClassName("screen third")[0].classList.remove("slideUpThird")
                document.getElementsByClassName("cv")[0].classList.add("hidden");
            }, 500)
            console.log(eventCurrentTarget);
            // calculate the scale and position for the card to fill the page,
            var scaleX = window.innerWidth / currentTarget.width;
            var scaleY = window.innerHeight / currentTarget.height;
            var offsetX = (window.innerWidth / 2 - currentTarget.width / 2 - currentTarget.left) / scaleX;
            var offsetY = (window.innerHeight / 2 - currentTarget.height / 2 - currentTarget.top) / scaleY;
            // set the transform on the cover - it will animate because of the transition set on it in the CSS
            background.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';

            setTimeout(function(){
                document.getElementsByClassName("close-fullscreen")[0].classList.remove("hidden");
                document.getElementsByClassName("fullscreen-portfolio")[0].classList.remove("hidden");
                document.getElementsByClassName("fullscreen-portfolio")[0].classList.add(eventCurrentTarget.id)
                document.getElementsByClassName("close-fullscreen")[0].onclick = (event) => {
                    document.getElementsByClassName("cv")[0].classList.remove("hidden");
                    background.style.transform = '';
                    background.style.cssText = (`left: 0px; top: 0px; width: 0px; height: 0px;`)
                    eventCurrentTarget.classList.remove("clicked");
                    document.getElementsByClassName("close-fullscreen")[0].classList.add("hidden");
                    document.getElementsByClassName("fullscreen-portfolio")[0].classList.add("hidden");
                    document.getElementsByClassName("fullscreen-portfolio")[0].classList.remove(eventCurrentTarget.id)
                }
            }, 1000)
            

        }
    });


 

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
