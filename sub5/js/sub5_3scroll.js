const windowHeight = window.innerHeight;

// sub5_3 scroll variable
const bgFirst = document.querySelector('.topBg');
const bgScd = document.querySelector('.mainBg');
const bigBox = document.querySelector('.box1');

var recruitHandle3 = function (){
    if(windowHeight > bgFirst.getBoundingClientRect().top){
        bgFirst.classList.add('moveTopBg');
    } else {
        bgFirst.classList.remove('moveTopBg');
    }
    if(windowHeight > bgScd.getBoundingClientRect().top){
        bgScd.classList.add('moveMainBg');
    } else {
        bgScd.classList.remove('moveMainBg');
    }
    if(windowHeight > bigBox.getBoundingClientRect().top){
        bigBox.classList.add('moveBigBox');
    } else {
        bigBox.classList.remove('moveBigBox');
    }
}
window.addEventListener('scroll', recruitHandle3);
