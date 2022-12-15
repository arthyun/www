const windowHeight = window.innerHeight;

// sub3_2 scroll variable
const accordionMain = document.querySelector('.accordion');
const earthMain = document.querySelector('.earth');
const imgLastMain = document.querySelector('.imgLast');

var develop2Handle = function (){
    if(windowHeight > accordionMain.getBoundingClientRect().top){
        accordionMain.classList.add('moveAccordion');
    } else {
        accordionMain.classList.remove('moveAccordion');
    }
    if(windowHeight > earthMain.getBoundingClientRect().top){
        earthMain.classList.add('moveEarth');
    } else {
        earthMain.classList.remove('moveEarth');
    }
    if(windowHeight > imgLastMain.getBoundingClientRect().top){
        imgLastMain.classList.add('moveImgLast');
    } else {
        imgLastMain.classList.remove('moveImgLast');
    }
}
window.addEventListener('scroll', develop2Handle);
