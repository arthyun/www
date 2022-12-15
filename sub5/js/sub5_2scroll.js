const windowHeight = window.innerHeight;

// sub5_2 scroll variable
const bgFirst = document.querySelector('.mainBg');
const boxAll = document.querySelectorAll('.bigBox > div');

var recruitHandle2 = function (){
    if(windowHeight > bgFirst.getBoundingClientRect().top){
        bgFirst.classList.add('movebgFirst');
    } else {
        bgFirst.classList.remove('movebgFirst');
    }
    for(let i=0; i<boxAll.length; i++){
        if(windowHeight > boxAll[i].getBoundingClientRect().top){
            boxAll[i].classList.add('moveBox');
        } else {
            boxAll[i].classList.remove('moveBox');
        }
    }
}
window.addEventListener('scroll', recruitHandle2);
