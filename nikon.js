/* 배너바 */
$(window).scrollTop(100000);

function SliderBox1__init() {
  $('.slider-box-1 > .side-btn > *').click(function () {
    var $this = $(this);

    var $slider = $this.parent().parent();

    var $current = $slider.find('> .slides > .active');
    var $post;

    var isLeft = $this.index() == 0;

    if (isLeft) {
      $post = $current.prev();

      if ($post.length == 0) {
        $post = $slider.find('> .slides > :last-child');
      }
    }
    else {
      $post = $current.next();

      if ($post.length == 0) {
        $post = $slider.find('> .slides > :first-child');
      }
    }

    $current.removeClass('active');
    $post.addClass('active');

    var index = $post.index();

    $slider.find('.page-btn > *.active').removeClass('active');
    $slider.find('.page-btn > *').eq(index).addClass('active');
  });

  // 페이지 버튼들에게 클릭 이벤트를 건다.
  $('.slider-box-1 > .page-btn > *').click(function () {
    var $this = $(this);

    $this.siblings('.active').removeClass('active');
    $this.addClass('active');

    var index = $this.index();

    var $slider = $this.closest('.slider-box-1');

    $slider.find(' > .slides > .active').removeClass('active');

    $slider.find(' > .slides > div').eq(index).addClass('active');
  });

  setInterval(function () {
    $('.slider-box-1 > .side-btn > :last-child').click();
  }, 5000);
}
SliderBox1__init();

/* 카드 슬라이더 */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
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
  breakpoints: {
    1340: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});