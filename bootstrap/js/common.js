// intro 기능
// const intro01 = document.querySelector('.pageIntro');
setTimeout(()=>{
        // intro01.style.display = 'none';
        // $('.pageIntro').fadeOut('fast');
        $('.pageIntro').empty();
    },1750)

// Initialize Swiper1
    var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    });

    $('.swiper-slide:eq(0)').find('.caption').addClass('moveCap');

    swiper1.on('slideChange', function () {
        var i = swiper1.activeIndex;
        $('.swiper-slide .caption').removeClass('moveCap');
        $('.swiper-slide:eq('+i+') .caption').addClass('moveCap');
    });

// Initialize Swiper2
    var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // centeredSlides: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        1281: {
            slidesPerView: 5,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
    },
    });
// window.addEventListener('resize', function(){
//     if(matchMedia("screen and (max-width: 768px)").matches) {
//         // Initialize Swiper2
//         var swiper2 = new Swiper('.swiper2', {
//             slidesPerView: 3,
//             spaceBetween: 10,
//             // centeredSlides: true,
//             navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             },
//             observer: true,
//             observeParents: true,
//             });
//     } else if(matchMedia("screen and (min-width: 769px)").matches) {
//         // Initialize Swiper2
//         var swiper2 = new Swiper('.swiper2', {
//             slidesPerView: 5,
//             spaceBetween: 10,
//             // centeredSlides: true,
//             navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             },
//             observer: true,
//             observeParents: true,
//             });
//     }
// });

// Models popup
const btnAll = document.querySelectorAll('.swiper2 .swiper-slide a');
let modelPop = document.querySelector('.modelPop_bg');
let popMain = document.querySelector('.popMain');
let models = [
    {
    "src": "./images/etronGT_pop.png", 
    "para1": `Audi e-tron GT`,
    "para2": `combined standard fuel economy 3.4 km/kWh (city fuel economy 3.3 km/kWh, highway fuel economy 3.4 km/kWh); CO₂ emissions (g/km)¹: 0. Power consumption and CO₂ emissions may vary depending on the installed equipment.`,
    "para3": `Price: 143,320,000(KRW)`    
    },
    {
    "src": "./images/etron_pop.png", 
    "para1": `Audi e-tron`,
    "para2": `Audi's amazing performance, and Audi's constant innovation. The Audi e-tron is a sporty and safe companion for everyday driving in a new era.`,
    "para3": `Price: 97,220,000(KRW)` 
    },
    {
    "src": "./images/A3_pop.png", 
    "para1": `Audi A3`,
    "para2": `The Audi A3 combines the classic style of a sedan with the sleek image of a coupe, showing an elegant yet sporty style. The particularly flowing roof line strongly demonstrates the dynamics of the Audi A3 sedan.`,
    "para3": `Price: 40,203,000(KRW)`
    },
    {
    "src": "./images/A4_pop.png", 
    "para1": `Audi A4`,
    "para2": `Audi A4 is more pronounced than ever before. It boasts a silhouette that combines dynamism and strength, elegance and beauty at the same time. Functional interior with high-quality materials, digital innovations, infotainment and driver assistance systems, and a powerful engine form one whole.`,
    "para3": `Price: 53,167,000(KRW)`
    },
    {
    "src": "./images/A5_pop.png", 
    "para1": `Audi A5`,
    "para2": `Beautiful appearance from any angle. The sportiness of the Audi A5 Coupe impresses from the first drive. Thanks to the new design language of the elegant three-door model, which boasts a sporty front with spacious air intakes and chrome trim.`,
    "para3": `Price: 66,829,000(KRW)`
    },
    {
    "src": "./images/A6_pop.png", 
    "para1": `Audi A6`,
    "para2": `The sharp shoulder line wheel arch with a strong curve further emphasizes the technology of the four-wheel drive system 'Quattro'. The side mirrors are located on the side of the armrest, revealing sportiness.`,
    "para3": `Price: 69,463,000(KRW)`
    },
    {
    "src": "./images/A7_pop.png", 
    "para1": `Audi A7`,
    "para2": `Unique style. The Audi A7 Sportback is a design that opens up a new style of sporty elegance. The sharp lines and the silhouette reminiscent of a coupe express a powerful sensibility.`,
    "para3": `Price: 90,475,000(KRW)`
    },
    {
    "src": "./images/A8_pop.png", 
    "para1": `Audi A8`,
    "para2": `The Audi A8 is the epitome of Audi innovation. Experience a new design language, a new operating concept and a new level of luxury class mobility in the future with the Audi A8.`,
    "para3": `Price: 137,982,000(KRW)`
    },
    {
    "src": "./images/Q2_pop.png", 
    "para1": `Audi Q2`,
    "para2": `Audi Q2 is versatile. Eye-catching youthful and sophisticated style, progressive design, driving pleasure and various functions. The Audi Q2 has everything you would expect from a compact SUV.`,
    "para3": `Price: 42,424,000(KRW)`
    },
    {
    "src": "./images/Q3_pop.png", 
    "para1": `Audi Q3`,
    "para2": `The Audi Q3 is a family SUV with all its capabilities. The second-generation Audi Q3, which returned with a more confident appearance, provides greater utility value with its spacious space, practical and versatile functions. The octagonal single-frame grille and large side air intakes further accentuate the strong front view.`,
    "para3": `Price: 48,577,000(KRW)`
    },
    {
    "src": "./images/Q4_pop.png", 
    "para1": `Audi Q4`,
    "para2": `The sporty design of the Audi Q4 Sportback e-tron further emphasizes the appeal of electric mobility of the future. With a resolute front and a strong rear, the dynamic silhouette of the Audi Q4 Sportback e-tron extends smoothly all the way to the rear.`,
    "para3": `Price: 70,700,000(KRW)`
    },
    {
    "src": "./images/Q5_pop.png", 
    "para1": `Audi Q5`,
    "para2": `Comfort, style and dynamism, the Audi Q5 is ready for every moment it encounters. A more expressive appearance, powerful driving force, innovative technology, and a variety of options. Audi Q5, everyday life is new.`,
    "para3": `Price: 68,881,000(KRW)`
    },
    {
    "src": "./images/Q7_pop.png", 
    "para1": `Audi Q7`,
    "para2": `With innovative and intuitive infotainment technology, you can enjoy a digitized lifestyle in the car. The Audi Virtual Cockpit Plus, located in front of the driver, displays various vehicle-related information such as speed and rpm on a high-resolution 12.3-inch display.`,
    "para3": `Price: 92,520,000(KRW)`
    },
    {
    "src": "./images/Q8_pop.png", 
    "para1": `Audi Q8`,
    "para2": `The Audi Q8 combines the elegance of a four-door luxury coupe with the performance and practicality of a large SUV. Various conveniences are comprehensively connected to the in-vehicle systems and provide the robustness needed for off-road driving, making it a reliable companion for both business and leisure.`,
    "para3": `Price: 116,637,000(KRW)`
    },
    {
    "src": "./images/R8_pop.png", 
    "para1": `Audi R8`,
    "para2": `A single frame with a strong presence, sharply trimmed side lines suggesting the installation of a mid-engine, and a diffuser mounted high at the rear. The Audi R8 V10 performance is impressive in every way.`,
    "para3": `Price: 255,690,000(KRW)`
    },
]
let output = '';

btnAll.forEach((item, index) => {
    item.addEventListener('click',(e) => {
        e.preventDefault();
        let modelsSrc = models[index].src;
        let modelsPara1 = models[index].para1;
        let modelsPara2 = models[index].para2;
        let modelsPara3 = models[index].para3;
        output += `<img src="${modelsSrc}" alt="">
                   <p>${modelsPara1}</p>
                   <p>${modelsPara2}</p>
                   <p>${modelsPara3}</p>
                   <a class="closePop" href="#">Close</a>`;
        popMain.innerHTML = output;
        modelPop.style.display = 'block';
        popMain.style.display = 'block';

        const btnClose = document.querySelector('.closePop');
        btnClose.onclick = (e) => {
            e.preventDefault();
            modelPop.style.display = 'none';
            popMain.style.display = 'none';
            output = '';
        };
    });
});
// modelPop.onclick = (e) => {
//     e.preventDefault();
//     modelPop.style.display = 'none';
// };

// topMove
const topBtn = document.querySelector('.topMove');
const mainH = document.querySelector('.main_visual').clientHeight;

topBtn.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth'});
};

function topFadeIn() {
    if(window.scrollY > 537) {
        topBtn.style.opacity = 1;
    } else {
        topBtn.style.opacity = 0;
    }
}
window.addEventListener('scroll', topFadeIn);

// service tab
const mainZone = document.querySelectorAll('.serviceZone');
const btnAll2 = document.querySelectorAll('.tabBtns a');
const btnAll3 = document.querySelectorAll('.tabBtns a');

mainZone.forEach((el, i) => {
    el.style.display = 'none';
    mainZone[0].style.display = 'block';
});

btnAll2.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        mainZone.forEach(el=>{
            el.style.display = 'none';
        });
        btnAll3.forEach(el2 => {
            el2.classList.remove('current');
        });

        if(item.classList.contains('zone1')){
            item.classList.add('current');
            mainZone[0].style.display = 'block';
        } else if(item.classList.contains('zone2')){
            item.classList.add('current');
            mainZone[1].style.display = 'block';
        } else if(item.classList.contains('zone3')){
            item.classList.add('current');
            mainZone[2].style.display = 'block';
        } else if(item.classList.contains('zone4')){
            item.classList.add('current');
            mainZone[3].style.display = 'block';
        }  
    });
});

// 헤더 각 컨텐츠 클릭 시
// const companyH = document.querySelector('.companyMain').getBoundingClientRect().top + window.pageYOffset;
// const modelsH = document.querySelector('.modelsMain').getBoundingClientRect().top + window.pageYOffset;
// const serviceH = document.querySelector('.serviceMain').getBoundingClientRect().top + window.pageYOffset;
// const susH = document.querySelector('.susMain').getBoundingClientRect().top + window.pageYOffset;
// const headBtns = document.querySelectorAll('.nav li a');

// headBtns.forEach((el)=>{
//     el.addEventListener('click', (e)=> {
//         e.preventDefault();
//         if(el.classList.contains('btn1')) {
//             window.scrollTo({top: companyH+100, behavior: "smooth"});
//         } else if(el.classList.contains('btn2')){
//             window.scrollTo({top: modelsH+100, behavior: "smooth"});
//         } else if(el.classList.contains('btn3')){
//             window.scrollTo({top: serviceH+150, behavior: "smooth"});
//         } else if(el.classList.contains('btn4')){
//             window.scrollTo({top: susH+300, behavior: "smooth"});
//         }
//     });
// });

// scroll events
const company = document.querySelector('.companyMain');
const model = document.querySelector('.modelsMain');
const service = document.querySelector('.serviceMain');
const susM = document.querySelector('.susMain');
const arr1 = [company, model, service, susM];
const winH = window.innerHeight;

function scrollAll() {
    for(let i = 0; i < 4; i++){
    if(winH > arr1[i].getBoundingClientRect().top+200) {
        arr1[i].classList.add('moveScroll');
    } else {
        arr1[i].classList.remove('moveScroll');
    }
    };
};
window.addEventListener('scroll', scrollAll);