const windowHeight = window.innerHeight;

// sub4_2 scroll variable
const mainBg = document.querySelector('.mainBg');
const partAll = document.querySelectorAll('.part1 > p');

var officeHandle2 = function (){
    if(windowHeight > mainBg.getBoundingClientRect().top){
        mainBg.classList.add('moveMainBg');
    } else {
        mainBg.classList.remove('moveMainBg');
    }

    for(let i = 0; i < partAll.length; i++){
    if(windowHeight > partAll[i].getBoundingClientRect().top){
        partAll[i].classList.add('movePart');
    } else {
        partAll[i].classList.remove('movePart');
    }
    }
}
window.addEventListener('scroll', officeHandle2);
