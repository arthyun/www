const listAll = document.querySelectorAll('.btnBox');
const change1 = document.querySelector('.news_list');
const change2 = document.querySelector('.list_cont');
const change3 = document.querySelectorAll('.news_list .list_cont li');
const change4 = document.querySelectorAll('.news_list .list_cont .cont');
const change5 = document.querySelectorAll('.news_list .list_cont .cont strong');
const changeLen = document.querySelectorAll('.news_list .list_cont li').length;

console.log(changeLen)

listAll.forEach((el,i)=>{
    el.addEventListener('click', (e)=>{
        e.preventDefault();

        if(el.classList.contains('listChange1')){
            const parent2 = el.parentNode;
            parent2.classList.add('active');

            const parentFriend3 = parent2.parentNode;
            const parentFriend4 = parentFriend3.childNodes;
            parentFriend4[3].classList.remove('active');

            change1.classList.remove('change');
            change2.classList.remove('change');
            
            for(let i = 0; i < changeLen; i++){
                change3[i].classList.remove('change');
                change4[i].classList.remove('change');
                change5[i].classList.remove('change');
            }

            const delImgTags = document.querySelectorAll('.news_list .list_cont li a .img');
            delImgTags.forEach((el2)=>{
                el2.style.display = 'block';
            });

        } else if(el.classList.contains('listChange2')){
            const parent1 = el.parentNode;
            parent1.classList.add('active');

            const parentFriend1 = parent1.parentNode;
            const parentFriend2 = parentFriend1.childNodes;
            parentFriend2[1].classList.remove('active');

            change1.classList.add('change');
            change2.classList.add('change');
            
            for(let i = 0; i < 6; i++){
                change3[i].classList.add('change');
                change4[i].classList.add('change');
                change5[i].classList.add('change');
            }

            const delImgTags = document.querySelectorAll('.news_list .list_cont li a .img');
            delImgTags.forEach((el2)=>{
                el2.style.display = 'none';
            });

            // if(location.href == 'https://heen3316.cafe24.com/sub6/sub6_1.html?page=3&scale=6'
            // && change3[0].classList.contains('change')){
            //     const delImgTags2 = document.querySelector('.news_list .list_cont li:nth-child(1)');
            //     delImgTags2.style.display = 'none';
            // }
        }
    });
});