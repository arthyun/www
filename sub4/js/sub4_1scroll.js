const windowHeight = window.innerHeight;

// sub4_1 scroll variable
const contAll = document.querySelectorAll('.contentArea > div');

var officeHandle = function (){
    for(let i = 0; i < contAll.length; i++){
    if(windowHeight > contAll[i].getBoundingClientRect().top){
        contAll[i].classList.add('moveCont'+[i+1]);
    } else {
        contAll[i].classList.remove('moveCont'+[i+1]);
    }
}
}
window.addEventListener('scroll', officeHandle);
