"use strict";
 
 //Head Animation
 
   
    function loadAnim() {

let anim1 = document.getElementById("loadImage1");
let anim2 = document.getElementById("loadImage2");


let scr = (screen.availWidth / 2) - 65;
 

 anim1.style.left = `${scr}px`;
 anim2.style.left = `${scr + 2}px`;
 
//Media Queries
 
let media1 = window.matchMedia("(min-width: 851px)");

let media2 = window.matchMedia("(max-width:230px) and (min-height: 751px)");

let media3 = window.matchMedia("(max-width:230px) and (max-height: 751px) and (min-height: 501px)");
let media4 = window.matchMedia("(max-width:230px) and (max-height: 500px) and (min-height: 351px)");
let media5 = window.matchMedia("(max-width:230px) and (max-height: 350px)");
let media6 = window.matchMedia("(max-width:250px) and (min-width: 231px) and (min-height: 751px) and (max-height: 950px)");
let media7 = window.matchMedia("(max-width:250px) and (min-width: 231px) and (max-height: 750px) and (min-height: 501px)");
let media8 = window.matchMedia("(max-width:250px) and (min-width: 231px) and (max-height: 500px) and (min-height: 351px)");
let media9 = window.matchMedia("(max-width:250px) and (min-width: 231px) and (max-height: 350px)");
let media10 = window.matchMedia("(max-width:250px) and (min-width: 231px) and (min-height: 951px)");
let media11 = window.matchMedia("(max-width:280px) and (min-width: 251px) and (min-height: 751px) and (max-height: 950px)");
let media12= window.matchMedia("(max-width:280px) and (min-width: 251px) and (max-height: 750px) and (min-height: 501px)");
let media13= window.matchMedia("(max-width:280px) and (min-width: 251px) and (max-height: 500px) and (min-height: 351px)");
let media14= window.matchMedia("(max-width:280px) and (min-width: 251px) and (max-height: 350px)");
let media15= window.matchMedia("(max-width:280px) and (min-width: 251px) and (min-height: 951px)");
let media16= window.matchMedia("(max-width:320px)  and (min-width: 281px) and (min-height: 751px) and (max-height: 950px)");
let media17= window.matchMedia("(max-width:320px)  and (min-width: 281px) and (max-height: 750px)  and (min-height: 501px)");
let media18= window.matchMedia(" (max-width:320px)  and (min-width: 281px) and (max-height: 500px) and (min-height: 351px)");
let media19= window.matchMedia("(max-width:320px)  and (min-width: 281px) and (max-height: 350px)");
let media20= window.matchMedia("(max-width:320px)  and (min-width: 281px) and (min-height: 951px)");
let media21= window.matchMedia("(max-width:370px)  and (min-width: 321px) and (min-height: 751px) and (max-height: 950px)");
let media22= window.matchMedia("(max-width:370px)  and (min-width: 321px) and (max-height: 750px) and (min-height: 501px)");
let media23= window.matchMedia("(max-width:370px)  and (min-width: 321px) and (max-height: 500px) and (min-width: 351px)");
let media24= window.matchMedia("(max-width:370px)  and (min-width: 321px) and (max-height: 350px)");
let media25= window.matchMedia("(max-width:370px)  and (min-width: 321px) and (min-height: 951px)");
let media26= window.matchMedia("(max-width:450px) and (min-width: 371px) and (min-height: 751px) and (max-height: 950px)");
let media27= window.matchMedia("(max-width:450px) and (min-width: 371px) and (max-height: 750px) and (min-height: 501px)");
let media28= window.matchMedia("(max-width:450px) and (min-width: 371px) and (max-height: 500px) and (min-height: 351px)");
let media29= window.matchMedia("(max-width:450px) and (min-width: 371px) and (max-height: 350px)");
let media30= window.matchMedia("(max-width:450px) and (min-width: 371px) and (min-height: 951px)");
let media31= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (min-height: 751px) and (max-height: 950px)");
let media32= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (max-height: 750px) and (min-height: 551px)");
let media33= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (max-height: 550px) and (min-height: 401px)");
let media34= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (max-height: 400px)");
let media35= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (min-height: 951px)");
 
let media38= window.matchMedia("(max-width: 700px) and (min-width: 581px) and (max-height: 550px) and (min-height: 351px)");
let media39= window.matchMedia(" (max-width: 700px) and (min-width: 581px) and (max-height: 350px)");
 
 
let media43= window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 550px) and (min-height: 401px)");
let media44= window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 400px)"); 

//large height
let media46= window.matchMedia("(min-width: 851px) and (max-height: 350px)");
 

let media47= window.matchMedia("(max-width:450px) and (min-width: 371px) and (max-height: 280px)");
let media48= window.matchMedia("(max-width: 580px) and (min-width: 451px) and (max-height: 300px)");
let media49= window.matchMedia("(max-width: 700px) and (min-width: 581px) and (max-height: 280px)");
let media50= window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 300px)");

if (media1.matches) {
 
let screenWidth = (screen.availWidth / 2) - 65;
 

 anim1.style.left = `${screenWidth}px`;
 anim2.style.left = `${screenWidth + 2}px`;
  
} 


if (media2.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
    
 
if (media3.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
    
if (media4.matches) {
 
        let screenWidth = (screen.availWidth / 2) -  47;
         
        
         anim1.style.left = `${screenWidth}px`;
         anim2.style.left = `${screenWidth + 2}px`;
          
        }     
    
if (media5.matches) {
 
            let screenWidth = (screen.availWidth / 2) -  42;
             
            
             anim1.style.left = `${screenWidth}px`;
             anim2.style.left = `${screenWidth + 2}px`;
              
            }     
  
if (media6.matches) {
 
                let screenWidth = (screen.availWidth / 2) -  47;
                 
                
                 anim1.style.left = `${screenWidth}px`;
                 anim2.style.left = `${screenWidth + 2}px`;
                  
                }     
  
  
if (media7.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
    
   
if (media8.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
    
   
if (media9.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  42;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 

  
if (media10.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }    
   
  
if (media11.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
     
if (media12.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
       
if (media13.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }    
    
        
if (media14.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  42;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }    
   
         
if (media15.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  47;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
    
            
if (media16.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
   
               
if (media17.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
   

                  
if (media18.matches) {
 
    let screenWidth = (screen.availWidth / 2) -  50;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
   
                    
if (media19.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
   
                   
if (media20.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    } 
   
                      
if (media21.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
    
                        
if (media22.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
      
                        
if (media23.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 50;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
                         
if (media24.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                            
if (media25.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                               
if (media26.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                 
if (media27.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                   
if (media28.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 50;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                      
if (media29.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 40;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                        
if (media30.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                           
if (media31.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }

                                              
if (media32.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                                 
if (media33.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }

                                                    
if (media34.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
   
                                                       
if (media35.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 60;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                          
if (media38.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 50;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  

                                                              
if (media39.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                               
if (media43.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }

    
                                                               
if (media44.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                             
if (media46.matches) {
 
        let screenWidth = (screen.availWidth / 2) - 44;
         
        
         anim1.style.left = `${screenWidth}px`;
         anim2.style.left = `${screenWidth + 2}px`;
          
        }
      
        
                                                             
if (media47.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 40;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                             
if (media48.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                             
if (media49.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 45;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
                                                             
if (media50.matches) {
 
    let screenWidth = (screen.availWidth / 2) - 40;
     
    
     anim1.style.left = `${screenWidth}px`;
     anim2.style.left = `${screenWidth + 2}px`;
      
    }
  
      

    }
//Logo changing Animation 

function* logoChange() {
    let anim1 = document.getElementById("loadImage1");
    let anim2 = document.getElementById("loadImage2");
 

anim2.onanimationend = () => {
 anim2.style.boxShadow = "3px 3px 6px 2px white";
    
}
 
anim2.style.visibility = "hidden";

  yield setTimeout(() => {
    anim1.style.visibility = "hidden";
    anim2.style.visibility = "visible";
 }, 2000);

 

 yield setTimeout(() => {
    anim1.style.visibility = "visible";
    anim2.style.visibility = "visible";
 }, 4000);
 

 }

//IIFE

 (() => {
 let gen = logoChange();

 gen.next();
 gen.next();
   
 })();


 (() => {
  
       setTimeout(() => {
            location.assign("./Home.html");
        }, 5500);
    
 })();
 
   