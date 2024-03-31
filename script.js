let flag = 0;
slideshow(flag);


function conrtoler(x){
    flag = flag + x;
    slideshow(flag);

}
function slideshow(num){

    let slides = document.getElementsByClassName('slides');

    if(num == slides.length){
       flag = 0;
       num = 0;
    }
    if(num < 0){
        flag = slides.length-1 ;
        num = slides.length-1;
     }

    for(slide of slides){
        slide.style.display = "none"
    }
     
    console.log(num)
    slides[num].style.display = "block"
}

let upper = document.getElementsByClassName('upper');
let inner = document.getElementsByClassName('inner');
function display(){
    
    console.log(inner.classList.list);
}
display()