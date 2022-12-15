const windowHeight = window.innerHeight;

// value 영역
const valueAll = document.querySelector('#content .value');
const valueList = document.querySelectorAll('#content .value li');

var valueMove = function(){
    if(windowHeight > valueAll.getBoundingClientRect().top){
        valueAll.classList.add('valueTop');
    } else {
        valueAll.classList.remove('valueTop');
    }
    for(var i = 0; i < valueList.length; i++) {
        if(windowHeight > valueList[i].getBoundingClientRect().top){
            valueList[i].classList.add('valueTop');
        } else {
            valueList[i].classList.remove('valueTop');
        }
    }
}
window.addEventListener('scroll', valueMove);


// bussiness 영역
const businessAll = document.querySelector('#content .business');
const businessList1 = document.querySelector('#content .business .business1');
const businessList2 = document.querySelector('#content .business .business2');
const businessList3 = document.querySelector('#content .business .business3');
const businessList4 = document.querySelector('#content .business .business4');

var businessMove = function(){
    if(windowHeight > businessAll.getBoundingClientRect().top){
        businessAll.classList.add('moveBusinessAll');
    } else {
        businessAll.classList.remove('moveBusinessAll');
    }
    if(windowHeight > businessList1.getBoundingClientRect().top){
        businessList1.classList.add('moveBusiness1');
    } else {
        businessList1.classList.remove('moveBusiness1');
    }
    if(windowHeight > businessList2.getBoundingClientRect().top){
        businessList2.classList.add('moveBusiness2');
    } else {
        businessList2.classList.remove('moveBusiness2');
    }
    if(windowHeight > businessList3.getBoundingClientRect().top){
        businessList3.classList.add('moveBusiness3');
    } else {
        businessList3.classList.remove('moveBusiness3');
    }
    if(windowHeight > businessList4.getBoundingClientRect().top){
        businessList4.classList.add('moveBusiness4');
    } else {
        businessList4.classList.remove('moveBusiness4');
    }
}
window.addEventListener('scroll', businessMove);


// newsRoom 영역
const newsAll = document.querySelector('#content .newsRoom');
const newsBtn = document.querySelector('#content .newsRoom .moreNews');
const newsBg = document.querySelector('#content .newsRoom .newsBG');
const news11 = document.querySelector('#content .newsRoom .news11');
const news22 = document.querySelector('#content .newsRoom .news22');
const news33 = document.querySelector('#content .newsRoom .news33');

var newsRoomMove = function(){
    if(windowHeight > newsAll.getBoundingClientRect().top){
        newsAll.classList.add('moveNewsAll');
    } else {
        newsAll.classList.remove('moveNewsAll');
    }
    if(windowHeight > newsBtn.getBoundingClientRect().top){
        newsBtn.classList.add('moveNewsBtn');
    } else {
        newsBtn.classList.remove('moveNewsBtn');
    }
    if(windowHeight > newsBg.getBoundingClientRect().top){
        newsBg.classList.add('moveNewsBg');
    } else {
        newsBg.classList.remove('moveNewsBg');
    }

    for(let i=1; i<4; i++) {
        if(windowHeight > eval('news'+i+[i]).getBoundingClientRect().top){
            eval('news'+i+[i]).classList.add('moveNews'+i+[i]);
        } else {
            eval('news'+i+[i]).classList.remove('moveNews'+i+[i]);
        }
    }
};
window.addEventListener('scroll', newsRoomMove);


// media 영역
const mediaAll = document.querySelector('#content .media');

var mediaMove = function(){
    if(windowHeight > mediaAll.getBoundingClientRect().top){
        mediaAll.classList.add('moveMediaAll');
    } else {
        mediaAll.classList.remove('moveMediaAll');
    }
};
window.addEventListener('scroll', mediaMove);


// recruit 영역
const recruitAll = document.querySelector('#content .recruit');

var recruitMove = function(){
    if(windowHeight > recruitAll.getBoundingClientRect().top){
        recruitAll.classList.add('moveRecruit');
    } else {
        recruitAll.classList.remove('moveRecruit');
    }};
window.addEventListener('scroll', recruitMove);