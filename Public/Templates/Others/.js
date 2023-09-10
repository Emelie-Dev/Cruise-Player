

   position: absolute;
   top: 50%;
   left: 46%;
   animation: imgAnim 2s ease-in-out 0s infinite alternate;
   animation-fill-mode: both;
   border-radius: 50%;
   pointer-events: none;





   
@keyframes imgAnim {
    0% {
        transform: rotate(0deg);
         opacity: 0.2;
       width: 5px;
       height: 5px;
        box-shadow: 3px 3px 6px 2px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 2px white;
    }
    50% {
       box-shadow: 3px 3px 6px 2px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 2px red;
    } 
     100% {
       width: 100px;
       height: 100px;
       transform: rotate(360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
        
 }
 
 }

 
let k = document.getElementById("loadImage1");
function cow () {
   return document.getElementById("loadImage1").style.display = "none";
}

function* generate() {
yield cow()

 
    
}

let c = generate();

function gen() {
   for(let v =0; v < c.next().length; v++ ) {
        return v.next();
   }
}
k.addEventListener("animationiteration", gen);





(function () {
    let r = document.getElementById("loadImage1");
    let d = document.getElementById("loadImage2");
    r.onanimationiteration = function () {
        v += 1;
        if (v == 2) {
           r.style.display = "none";
            d.style.display = "block";
            v = 0;
             
                } 
    }


    d.onanimationiteration = function () {
        v += 1;
        if (v == 2 ) {
           d.style.display = "none";
         
           r.style.display = "block";
           d.style.display = "block";

           d.onanimationend = () => (d.style.boxShadow = "6px 6px 6px white");
             
                } 
    }

   
})();

 


top: 50%;
   left: 46%;



   top: 51%;
   left: 46.1%;






   
function loadAnim() {
    let x = window.matchMedia("(min-width: 1001px)");

    let l = window.matchMedia("(min-width: 521px) and (max-width: 1000px)");

    let v = window.matchMedia("(min-width: 441px) and (max-width: 520px)");

    let a = window.matchMedia("(max-width: 440px)and (min-width: 351px)");

    let q = window.matchMedia("(max-width: 350px) and (min-width: 301px)");

    let k = window.matchMedia("(max-width: 300px) and (min-width: 271px)");

    let n = window.matchMedia("(max-width: 270px) and (min-width: 231px)");

    let u = window.matchMedia("(max-width: 230px) and (min-width: 201px)");

    let j = window.matchMedia("(max-width: 200px)");

    let z = screen.availWidth;


if (x.matches) { 
let r = (5.2 / 1166);

let d = 2.8 - (200 * r);
   let v = (z * r) + d;
let b =  document.getElementById("headAnim").children;
let s = b.length;
 
for(let i = 0; i <= s; i++) {
    b[i].style.fontSize = `${v}rem`;
   }
 


}
 

if (l.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);
 
}

if (v.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (a.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (q.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (k.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (n.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (u.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}


if (j.matches) {
    let c = document.getElementById("max");
    let f = document.createElement("br");
let s = document.getElementById("headAnim");
    s.insertBefore(f, c);   

}
 
}




@media only screen and (max-width: 850px) and (max-height: 800px) and (min-height:651px) {
    [id^= "head"] {
       font-size: 5rem;
         }
  #max {
    display: none;
  }  
 
  #sec {
    top: 55%
  }
         
    #head1, #head7 {
       font-size: 6rem;
    }
 
 
    #loadImage1 {
       
       font-size: 4rem;
        }
        #loadImage2 {
          width: 110px;
          height: 88px;
           font-size: 4rem;
        }
 @keyframes imgAnim1 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 118px;
       height: 100px;
       transform: rotate(360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }       
 
  
 @keyframes imgAnim2 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 110px;
       height: 88px;
       transform: rotate(-360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }         
 
 
  }
 
  
  @media only screen and (max-width: 850px)  and (max-height: 650px) and (min-height: 501px) {
    [id^= "head"] {
       font-size: 5rem;
         }
  #max {
    display: none;
  }  
 
  #sec {
    top: 40%
  }
         
    #head1, #head7 {
       font-size: 6rem;
    }
 
 
    #loadImage1 {
       top: 35%;
       font-size: 4rem;
        }
        #loadImage2 {
          top: 36%;
          width: 110px;
          height: 88px;
           font-size: 4rem;
        }
 @keyframes imgAnim1 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 118px;
       height: 100px;
       transform: rotate(360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }       
 
  
 @keyframes imgAnim2 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 110px;
       height: 88px;
       transform: rotate(-360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }         
 
 
  }
 
  
  @media only screen and (max-width: 850px)  and (max-height: 500px) and (min-height: 351px) {
    [id^= "head"] {
       font-size: 4rem; 
         }
  #max {
    display: none;
  }  
 
  #sec {
    top: 25%
  }
         
    #head1, #head7 {
       font-size: 5rem;
    }
 
 
    #loadImage1 {
       top: 30%;
       font-size: 4rem;
        }
        #loadImage2 {
          top: 31%;
          width: 110px;
          height: 88px;
           font-size: 4rem;
        }
 @keyframes imgAnim1 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 118px;
       height: 100px;
       transform: rotate(360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }       
 
  
 @keyframes imgAnim2 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 110px;
       height: 88px;
       transform: rotate(-360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }         
 
 
  }
 
  
  @media only screen and (max-width: 850px)  and (max-height: 350px)  {
    [id^= "head"] {
       font-size: 3.5rem; 
        
         }
  #max {
    display: none;
  }  
 
  #sec {
    top: 18%
  }
         
    #head1, #head7 {
       font-size: 4rem;
    }
 
 
    #loadImage1 {
       top: 30%;
       font-size: 3.5rem;
        }
        #loadImage2 {
          top: 31%;
          width: 103px;
          height: 80px;
           font-size: 3.5rem;
        }
 @keyframes imgAnim1 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 110px;
       height: 90px;
       transform: rotate(360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }       
 
  
 @keyframes imgAnim2 {
    0% {
        transform: rotate(0deg);
         opacity: 0;
       width: 0px;
       height: 0px;
      
        box-shadow: 3px 3px 6px 5px magenta; 
    }
    25% {
       box-shadow: 3px 3px 6px 5px white;
    }
    50% {
       box-shadow: 3px 3px 6px 5px  blue;
    }
     75% {
       box-shadow: 3px 3px 6px 5px red;
    } 
     100% {
       width: 110px;
       height: 88px;
       transform: rotate(-360deg);
      opacity: 1;
       box-shadow: 3px 3px 6px 2px black;
    
 }
 
 }         
 
 
  }
 
  


  