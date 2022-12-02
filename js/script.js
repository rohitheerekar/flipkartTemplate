let flag = 0;

function controller(x){
    flag = flag + x;
    SlideShow(flag)
}

function SlideShow(num){
    let slides = document.getElementsByClassName("slide");
    if(num==slides.length){
        num = 0;
        flag = 0;
    }else if(num<0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for(i of slides){
        i.style.display = "none";
    }
    slides[num].style.display = "block";
}
SlideShow(flag);