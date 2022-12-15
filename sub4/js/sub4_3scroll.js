const windowHeight = window.innerHeight;

// sub4_3 scroll variable
const mindCont = document.querySelector('.mind');
const bigBoxAll = document.querySelectorAll('.bigBox > li');

var officeHandle3 = function (){
    if(windowHeight > mindCont.getBoundingClientRect().top){
        mindCont.classList.add('moveMind');
    } else {
        mindCont.classList.remove('moveMind');
    }

    for(let i = 0; i < bigBoxAll.length; i++){
    if(windowHeight > bigBoxAll[i].getBoundingClientRect().top){
        bigBoxAll[i].classList.add('movebigBox');
    } else {
        bigBoxAll[i].classList.remove('movebigBox');
    }
    }
}
window.addEventListener('scroll', officeHandle3);
