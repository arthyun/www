    const windowHeight = window.innerHeight;

    // sub2_3 scroll variable
    const img_1 = document.querySelector('.chemicalImg1');
    const img_2 = document.querySelector('.chemicalImg2');
    const img_3 = document.querySelector('.chemicalImg3');
    const img_4 = document.querySelector('.chemicalImg4');
    const img_5 = document.querySelector('.chemicalImg5');
    const chemiDl1 = document.querySelectorAll('.chemicalInner1 dl');
    const chemiDl2 = document.querySelector('.chemicalInner2 dl');
    const chemiDl3 = document.querySelector('.chemicalInner3 dl');
    const chemiDl4 = document.querySelectorAll('.chemicalInner4 dl');
    const chemiDl5 = document.querySelector('.chemicalInner5 dl');

    var chemicalHandle = function (){

        if(windowHeight > img_1.getBoundingClientRect().top){
            img_1.classList.add('moveImg1');
            } else {
            img_1.classList.remove('moveImg1');
            }
        if(windowHeight > img_2.getBoundingClientRect().top){
            img_2.classList.add('moveImg2');
            } else {
            img_2.classList.remove('moveImg2');
            }
        if(windowHeight > img_3.getBoundingClientRect().top){
            img_3.classList.add('moveImg3');
            } else {
            img_3.classList.remove('moveImg3');
            }
        if(windowHeight > img_4.getBoundingClientRect().top){
            img_4.classList.add('moveImg4');
            } else {
            img_4.classList.remove('moveImg4');
            }
        if(windowHeight > img_5.getBoundingClientRect().top){
            img_5.classList.add('moveImg5');
            } else {
            img_5.classList.remove('moveImg5');
            }

    for(let j = 0; j < 3; j++){
        if(windowHeight > chemiDl1[j].getBoundingClientRect().top){
            chemiDl1[j].classList.add('moveDl');
        } else {
            chemiDl1[j].classList.remove('moveDl');
        }
        if(windowHeight > chemiDl2.getBoundingClientRect().top){
            chemiDl2.classList.add('moveDl');
        } else {
            chemiDl2.classList.remove('moveDl');
        }
        if(windowHeight > chemiDl3.getBoundingClientRect().top){
            chemiDl3.classList.add('moveDl');
        } else {
            chemiDl3.classList.remove('moveDl');
        }
        if(windowHeight > chemiDl4[0].getBoundingClientRect().top){
            chemiDl4[0].classList.add('moveDl');
            chemiDl4[1].classList.add('moveDl');
        } else {
            chemiDl4[0].classList.remove('moveDl');
            chemiDl4[1].classList.remove('moveDl');
        }
        if(windowHeight > chemiDl5.getBoundingClientRect().top){
            chemiDl5.classList.add('moveDl');
        } else {
            chemiDl5.classList.remove('moveDl');
        }
    }
}
    window.addEventListener('scroll', chemicalHandle);