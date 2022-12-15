$(window).on('scroll', function(){
    var scroll_2 = $(window).scrollTop();
    if(scroll_2 > 300) {
        $('.slideMenu').fadeIn('slow');
    } else {
        $('.slideMenu').hide();
    }
})

$('.slideMenu li a').click(function(e){
    e.preventDefault();

    var value = 0;

    if($(this).hasClass('link1')) {
        value = $('.intro').offset().top;
    } else if($(this).hasClass('link2')) {
        value = $('.year2012').offset().top;
    } else if($(this).hasClass('link3')) {
        value = $('.year2000').offset().top;
    } else if($(this).hasClass('link4')) {
        value = $('.year1970').offset().top;
    }

    $('html,body').stop().animate({'scrollTop': value}, 1000);
})

// 위치에 맞는 스크롤값이 되면 텍스트 보이게
const windowHeight = window.innerHeight;
const linkAll = document.querySelectorAll('.slideMenu li a span');
const link_1 = document.querySelector('.slideMenu .link1 span');
const link_2 = document.querySelector('.slideMenu .link2 span');
const link_3 = document.querySelector('.slideMenu .link3 span');
const link_4 = document.querySelector('.slideMenu .link4 span');
const y2011 = document.querySelector('.year2011');
const y2005 = document.querySelector('.year2005');
const y1993 = document.querySelector('.year1993');
const y1960 = document.querySelector('.year1960');

const upText = function(){
    if(windowHeight > y2011.getBoundingClientRect().top){
        link_1.style.opacity = '1';
    } else {
        link_1.style.opacity = 0;
    }
    if(windowHeight > y2005.getBoundingClientRect().top){
        link_2.style.opacity = '1';
        link_1.style.opacity = 0;
    } else {
        link_2.style.opacity = 0;
    }
    if(windowHeight > y1993.getBoundingClientRect().top){
        link_3.style.opacity = '1';
        link_2.style.opacity = 0;
    } else {
        link_3.style.opacity = 0;
    }
    if(windowHeight > y1960.getBoundingClientRect().top){
        link_4.style.opacity = '1';
        link_3.style.opacity = 0;
    } else {
        link_4.style.opacity = 0;
    }
}
window.addEventListener('scroll', upText);

// 연혁 스크롤 이벤트
const moveBox1 = document.querySelector('.moveBox1');
const moveBox2 = document.querySelector('.moveBox2');
const moveBox3 = document.querySelector('.moveBox3');
const moveBox4 = document.querySelector('.moveBox4');

const moveHandle = function() {
    if(windowHeight > moveBox1.getBoundingClientRect().top) {
        moveBox1.classList.add('moveBoxHistory');
    } else {
        moveBox1.classList.remove('moveBoxHistory');
    }
    if(windowHeight > moveBox2.getBoundingClientRect().top) {
        moveBox2.classList.add('moveBoxHistory');
    } else {
        moveBox2.classList.remove('moveBoxHistory');
    }
    if(windowHeight > moveBox3.getBoundingClientRect().top) {
        moveBox3.classList.add('moveBoxHistory');
    } else {
        moveBox3.classList.remove('moveBoxHistory');
    }
    if(windowHeight > moveBox4.getBoundingClientRect().top) {
        moveBox4.classList.add('moveBoxHistory');
    } else {
        moveBox4.classList.remove('moveBoxHistory');
    }
}

window.addEventListener('scroll', moveHandle);