

let flag = 0;

function controller(x){
    flag=flag+x;
    slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName("slide");
    if(num==slides.length){
       flag=0;
       num=0;
    }
    if(n<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }


    slides[num].style.display="block";
}


























































