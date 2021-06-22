/* 배너바 */
$('.my-1').owlCarousel({
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  loop:true,
  margin:0,
  responsive:{
      0:{
          items:1
      }
  }
})

/* 카드 슬라이더 */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});