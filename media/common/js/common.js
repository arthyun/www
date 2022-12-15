// gnb 버튼
const gnbOpen = document.querySelector('.gnbOpenBtn');
const headerArea = document.querySelector('#headerArea');
const gnbNav = document.querySelector('#gnb');
let gnbOpenF = false;

gnbOpen.onclick = (e) => {
  e.preventDefault();
  if(gnbOpenF == false){
    headerArea.classList.add('mn_open');
    gnbNav.style.right = '-50%';
    gnbNav.style.transition = 'all .5s';
    gnbOpenF = true;
  } else {
    headerArea.classList.remove('mn_open');
    gnbNav.style.right = '-100%';
    gnbNav.style.transition = 'all .3s';
    gnbOpenF = false;
  }

};

// topMove 버튼
const topMove = document.querySelector('.topMove');
function topMoveBtn(e){
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
}
topMove.addEventListener('click', topMoveBtn)