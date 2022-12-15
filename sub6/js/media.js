// renew - 바닐라 version
    let position = 0; // left 최초위치
    let movesize = document.querySelector('.selectSection .select1 ul li').clientWidth + 20; //li 하나의 너비(margin포함)

    const btnAll = document.querySelectorAll('.selectSection .button');
    const moveBox = document.querySelector('.selectSection .select1 .moveBox');
    const mediaUl = document.querySelector('.selectSection .select1 ul');
    const cloneUl = mediaUl.cloneNode(true);
    moveBox.appendChild(cloneUl);

    btnAll.forEach((el, i)=>{
        el.addEventListener('click', function(e){
            e.preventDefault();
            
            if(el.classList.contains('prev')){
                position -= movesize;
                // moveBox.style.transition = 'all .1s'
                moveBox.style.left = `${position}px`;
                if(position == -1400){
                    position = 0;
                }
            } else if(el.classList.contains('next')){
                if(position == 0){
                    position = -1400;
                }
                position += movesize;
                moveBox.style.left = `${position}px`;
            }
        });
    });