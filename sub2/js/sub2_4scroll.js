const windowHeight = window.innerHeight;

// sub2_4 scroll variable
const fassionLists = document.querySelectorAll('.fassionBox li');
const fassionLast = document.querySelector('.blackBg');

console.log(fassionLists);
var fassionHandle = function (){
    for(let k = 0; k < 6; k++){
        if(windowHeight > fassionLists[k].getBoundingClientRect().top){
            fassionLists[k].classList.add('movefs'+[k+1]);
        } else {
            fassionLists[k].classList.remove('movefs'+[k+1]);
        }
    }
    if(windowHeight > fassionLast.getBoundingClientRect().top){
        fassionLast.classList.add('moveBG1');
    } else {
        fassionLast.classList.remove('moveBG1');
    }
}
window.addEventListener('scroll', fassionHandle);