const windowHeight = window.innerHeight;

// sub3_1 scroll variable
const researchDl = document.querySelector('#content .contentArea .research dl');
const researchFirst = document.querySelector('#content .contentArea .research h3');
const researchSecond = document.querySelector('#content .contentArea .develop h3');
const developFirst = document.querySelector('#content .contentArea .slogan p:nth-child(1)');
const developBottomImg1 = document.querySelector('#content .contentArea .develop li:nth-child(1) img');
const developBottomImg2 = document.querySelector('#content .contentArea .develop li:nth-child(2) img');

var developHandle = function (){
    if(windowHeight > researchDl.getBoundingClientRect().top){
        researchDl.classList.add('moveRsDl');
    } else {
        researchDl.classList.remove('moveRsDl');
    }
    if(windowHeight > researchFirst.getBoundingClientRect().top){
        researchFirst.classList.add('moveRs1');
    } else {
        researchFirst.classList.remove('moveRs1');
    }
    if(windowHeight > researchSecond.getBoundingClientRect().top){
        researchSecond.classList.add('moveRs2');
    } else {
        researchSecond.classList.remove('moveRs2');
    }
    if(windowHeight > developFirst.getBoundingClientRect().top){
        developFirst.classList.add('moveSlogan');
    } else {
        developFirst.classList.remove('moveSlogan');
    }
    if(windowHeight > developBottomImg1.getBoundingClientRect().top){
        developBottomImg1.classList.add('moveImg1');
    } else {
        developBottomImg1.classList.remove('moveImg1');
    }
    if(windowHeight > developBottomImg2.getBoundingClientRect().top){
        developBottomImg2.classList.add('moveImg2');
    } else {
        developBottomImg2.classList.remove('moveImg2');
    }
}
window.addEventListener('scroll', developHandle);
