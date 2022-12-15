// getAttribute로 iframe 속성이 안불러와짐 ㅠㅠㅠ
const playPause = document.getElementsByTagName('iframe');
const modalBg1 = document.querySelector('.modalBg1');
const modalBg2 = document.querySelector('.modalBg2');
const modalBg3 = document.querySelector('.modalBg3');
const modalBg4 = document.querySelector('.modalBg4');
const modalBg5 = document.querySelector('.modalBg5');
const btnAll = document.querySelectorAll('.hongboLists ul li a');
const modalAll = [modalBg1,modalBg2,modalBg3,modalBg4,modalBg5];
const srcAll = ['https://www.youtube.com/embed/L5MWNwplhwU',
                'https://www.youtube.com/embed/CqOw2l8g_6Y',
                'https://www.youtube.com/embed/LzLV2wDNPKQ',
                'https://www.youtube.com/embed/PjW3gNWVBtY',
                'https://www.youtube.com/embed/GZb4Nk6pQTk']

for(let i = 0; i < 5; i++) {
    modalAll[i].style.display = 'none';
};

btnAll.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        modalAll[i].style.display = 'block';
        $('.video-container').html('<iframe id="videoMain" width="800" height="600" src="' + srcAll[i] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><a class="closeBtn" href="#">닫기</a>');
    });
});

// 닫기 버튼
const closeBtnAll = document.querySelectorAll('.video-container .closeBtn');

for(let j = 0; j < 5; j++) {
    closeBtnAll[j].addEventListener('click', (e) => {
        e.preventDefault();
        modalAll[j].style.display = 'none';
        $('.video-container').empty();
    });
    modalAll[j].addEventListener('click', (e) => {
        e.preventDefault();
        modalAll[j].style.display = 'none';
        $('.video-container').empty();
    });
};

