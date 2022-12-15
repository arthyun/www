    const windowHeight = window.innerHeight;
    
    // sub2_2 scroll variable
    const filmLists = document.querySelectorAll('.filmBox > div')

    var filmHandle = function (){
        for(let i = 0; i < 4; i++) {
            if(windowHeight > filmLists[i].getBoundingClientRect().top){
                filmLists[i].classList.add('movefilm');
            } else {
                filmLists[i].classList.remove('movefilm');
            }
            };
        }
    window.addEventListener('scroll', filmHandle);