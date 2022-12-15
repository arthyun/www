window.onload = function(){

// 자동 흐르게
var position = -20; // 최초 위치 / left값으로 활용
var movesize = 420; // 이동 크기 / left로 xx씩 움직일 것

var copyOfUl = document.querySelector('.media .moveBox ul');
var copyTarget = document.querySelector('.media .moveBox');
var cloneUl = copyOfUl.cloneNode(true);
copyTarget.appendChild(cloneUl);
// $('.media .moveBox ul').after($('.media .moveBox ul').clone()); // ul 한번 복제!

        $(document).on('click', '.media .button', function(e){
        e.preventDefault();

        if($(this).is('.media .moreLeft')){ // 이전버튼 클릭
            // 아래 코드는 반복문처럼 만들기 위함이다. 미작성 시 한 사이클이 돌고난 후 컨텐츠의 공란이 생긴다.
            if (position == -2120){
                $('.media .moveBox').css('left', -20);
                position = -20;
            }
            position -= movesize; // 420씩 감소
            $('.media .moveBox').stop().animate({left: position}, 'fast',
            function(){
                if(position == -2120) {
                    $('.media .moveBox').css('left', -20);
                    position = -20;
                }
            });
        } else if($(this).is('.media .moreRight')){ // 다음버튼 클릭
            // 아래 코드는 반복문처럼 만들기 위함이다.
            // 첫 로딩 시 left가 0이고 컨텐츠 기준 좌측이 비어있기 때문에 채워야한다.
            if (position == -20){
                $('.media .moveBox').css('left', -2120);
                position = -2120;
            }
            position += movesize; // 420씩 증가
            $('.media .moveBox').stop().animate({left: position}, 'fast',
            function(){
                if(position == -20) {
                    $('.media .moveBox').css('left', -2120);
                    position = -2120;
                }
            });
        }
    });

    // // renew - 바닐라 version
    // let position = -20; // 최초위치
    // let movesize = 420; // 이동할 너비

    // const btnAll = document.querySelectorAll('.media .button');
    // const contMain = document.querySelector('.media .moveBox');
    // const copyOfUl = document.querySelector('.media .moveBox ul');
    // const cloneUl = copyOfUl.cloneNode(true);
    // contMain.appendChild(cloneUl);

    // btnAll.forEach((el, i)=>{
    //     el.addEventListener('click', function(e){
    //         e.preventDefault();
    //         contMain.style.position = 'relative';
    //         contMain.style.left = 0+'px';

    //         if(el.classList.contains('moreLeft')){
    //             if(position == -2120){
    //                 contMain.style.left = -20+'px';
    //                 position = -20;
    //             }
    //             position -= movesize;
    //             contMain.style.left = position+'px';
    //             if(position == -2120){
    //                 contMain.style.left = -20+'px';
    //                 position = -20;
    //             }
    //         } else if(el.classList.contains('moreRight')){
    //             if(position == -20){
    //                 contMain.style.left = -2120+'px';
    //                 position = -2120;
    //             }
    //             position += movesize;
    //             contMain.style.left = position+'px';
    //             if(position == -20){
    //                 contMain.style.left = -2120+'px';
    //                 position = -2120;
    //             }
    //         }
    //     });
    // });
};