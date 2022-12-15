window.onload = function(){
// 스크롤 값 변수 담기
const windowHeight = window.innerHeight;

// sub1_1 variable
const firstContList = document.querySelectorAll('#data1-1 li');
const secondCont = document.querySelector('.secondContent');

// sub1_1 scroll
function firstContHandle(){
    for(let i = 0; i < firstContList.length; i++){
        if(windowHeight > firstContList[i].getBoundingClientRect().top){
            firstContList[i].classList.add('sub1_1_on');
        } else {
            firstContList[i].classList.remove('sub1_1_on');
        }

        if(windowHeight > secondCont.getBoundingClientRect().top){
            secondCont.classList.add('sub1_1_on_1');
        } else {
            secondCont.classList.remove('sub1_1_on_1');
        }
    }
}
window.addEventListener('scroll', firstContHandle);
}