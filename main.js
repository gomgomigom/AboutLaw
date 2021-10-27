'use strict';

// 홈 스크롤 내릴수록 투명하게
const homeContainer = document.querySelector('.home__container');
scrollTransparent(homeContainer);

function scrollTransparent(container) {
  const containerHeight = container.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    if (window.scrollY > containerHeight) {
      return;
    }
    container.style.opacity = 1 - window.scrollY / containerHeight / 1;
  });
}

const onOpen = document.querySelector('#onopen');
onOpen.addEventListener('click', () => {
  const url = 'http://www.ftc.go.kr/bizCommPop.do?wrkr_no=5142867391';
  window.open(url, 'bizCommPop', 'width=750, height=700;');
});
