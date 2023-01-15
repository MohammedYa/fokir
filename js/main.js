var products=document.querySelectorAll(".product");
var img=Array.from( document.querySelectorAll(".image"));
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var close=document.querySelector(".close");
var navbar=document.querySelector(".navbar");

let currentindex=0;
var imgsrc;
var work=document.querySelector(".work");
var layerWork=document.querySelector(".layerwork")
for(var x=0 ;x<img.length;x++){
    img[x].addEventListener("click",function(e){
        imgsrc=e.target.src
        work.style.backgroundImage=`url(${imgsrc})`;
        layerWork.style.display="flex";
        navbar.style.display="none";
        currentindex=img.indexOf(e.target)
    })



    
}
/* close function*/

function closeslide()
{
    layerWork.style.display="none";
    navbar.style.display="flex";
}
close.addEventListener("click",closeslide)

/* next slide*/
next.addEventListener("click",NextSlide)
function NextSlide(){
    currentindex++;

    if(currentindex==img.length-1){
        currentindex=0

        
    }

        imgsrc=img[currentindex].src;
        work.style.backgroundImage=`url(${imgsrc})`

}

/* preveios slide*/
prev.addEventListener("click",PrevSlide);
function PrevSlide(){
    currentindex--;

    if(currentindex<0){
        currentindex=img.length-1

        
    }

        imgsrc=img[currentindex].src;
        work.style.backgroundImage=`url(${imgsrc})`

}

/* key board action*/
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){
        NextSlide();
    }
    else if(e.key=="ArrowLeft"){
        PrevSlide()
    }
    else if(e.key=="Escape"){
        closeslide()
    }
})
///contact clear

var inputs=document.querySelectorAll(".inp")
var sendmsg=document.getElementById("btns");
sendmsg.addEventListener("click",function(){
  for(var i=0 ;i<inputs.length;i++){
      inputs[i].value=""
  }
})