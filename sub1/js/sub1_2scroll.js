// 스크롤 값 변수 담기
const windowHeight = window.innerHeight;

// sub1_2 variable
const ceoAll = document.querySelector('#content .ceoInterview');
const ceoFirst = document.querySelector('#content .ceoInterview0 .ceoInterview1');
const ceoSecond = document.querySelector('#content .ceoInterview0 .ceoInterview2');

function ceoContHandle() {
    if(windowHeight > ceoAll.getBoundingClientRect().top){
        ceoAll.classList.add('sub1_2_on_1');
    } else {
        ceoAll.classList.remove('sub1_2_on_1');
    }
    if(windowHeight > ceoFirst.getBoundingClientRect().top){
        ceoFirst.classList.add('sub1_2_on_2');
    } else {
        ceoFirst.classList.remove('sub1_2_on_2');
    }
    if(windowHeight > ceoSecond.getBoundingClientRect().top){
        ceoSecond.classList.add('sub1_2_on_3');
    } else {
        ceoSecond.classList.remove('sub1_2_on_3');
    }
}
window.addEventListener('scroll', ceoContHandle);