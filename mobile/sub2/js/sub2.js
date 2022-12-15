const tabContAll = document.querySelectorAll('.tabSection ul li');
const tabBtnAll = document.querySelectorAll('.tabBtn a');

tabContAll.forEach(item => {
    item.style.display = 'none';
})
tabContAll[0].style.display = 'block';


tabBtnAll.forEach((el, i) => {
    el.addEventListener('click', function(e){
        e.preventDefault();

        for(let j = 0; j < 4; j++){
            tabContAll[j].style.display = 'none';
            tabBtnAll[j].style.background = '#ccc';
        }

        if(tabBtnAll[i].classList.contains('tab1')){
            e.target.style.background = 'rgba(239, 73, 90, 1)';
            tabContAll[0].style.display = 'block';
        } else if(tabBtnAll[i].classList.contains('tab2')){
            e.target.style.background = 'rgba(239, 73, 90, 1)';
            tabContAll[1].style.display = 'block';
        } else if(tabBtnAll[i].classList.contains('tab3')){
            e.target.style.background = 'rgba(239, 73, 90, 1)';
            tabContAll[2].style.display = 'block';
        } else if(tabBtnAll[i].classList.contains('tab4')){
            e.target.style.background = 'rgba(239, 73, 90, 1)';
            tabContAll[3].style.display = 'block';
        } 
    });
});