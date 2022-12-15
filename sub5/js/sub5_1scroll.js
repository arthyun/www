const windowHeight = window.innerHeight;

// sub5_1 scroll variable
const imgFirst = document.querySelector('.firstImg');
const paraFirst = document.querySelector('.threeP');
const secondContAll = document.querySelectorAll('.secondContent ul li');

var recruitHandle = function (){
    if(windowHeight > imgFirst.getBoundingClientRect().top){
        imgFirst.classList.add('moveImgFirst');
    } else {
        imgFirst.classList.remove('moveImgFirst');
    }
    if(windowHeight > paraFirst.getBoundingClientRect().top){
        paraFirst.classList.add('moveParaFirst');
    } else {
        paraFirst.classList.remove('moveParaFirst');
    }
    for(let i=0; i<secondContAll.length; i++){
        if(windowHeight > secondContAll[i].getBoundingClientRect().top){
            secondContAll[i].classList.add('moveScdCont');
        } else {
            secondContAll[i].classList.remove('moveScdCont');
        }
    }
}
window.addEventListener('scroll', recruitHandle);
