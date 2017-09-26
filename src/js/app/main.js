(function ($) {
  $(function () {

    // плавный переход по якорям
    {
      $('.js-scroll').on('click', (e) => {
        e.preventDefault()
        $('html, body').animate({scrollTop: $(e.currentTarget.hash).offset().top})
      })
    }

    // появление при скролле страницы значка НАВЕРХ
    {
      const scrollButton = $('.js-arrow')
      const pixels = 200
      const $window = $(window)
      const animateButton = (() => {
        return (opacityValue) => {
          scrollButton.stop().animate({opacity: opacityValue}, 200)
        }
      })()
      $window.scroll((e) => { animateButton(+(e.currentTarget.pageYOffset > pixels)) })
      // если перезагрузили страницу, но скролл ниже 200 пикселей, то показываем значек сразу
      if ($window.scrollTop() > pixels) { animateButton(1) }
      // событие на клик по значку НАВЕРХ
      scrollButton.on('click', (e) => {
        e.preventDefault()
        $('html, body').animate({scrollTop: 0})
      })
    }

    // инициализация слайдера
    {
      $('.swiper-container').swiper({
        slidesPerView: 'auto'
      })
    }

    // мобильное меню
    {
      $('#menu-icon').on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        const $mobileMenu = $($this.val())
        $this.toggleClass('open')
        $mobileMenu.slideToggle()
      })
    }

    // плавающее меню
    {
      const $window = $(window)
      const $menu = $('.menu')
      const menuOffsetTop = $menu.offset().top
      const $header = $('.header')
      const classFixed = 'fixed'
      const mobileWidth = 768

      if ($window[0].innerWidth > mobileWidth) {
        $window.bind('scroll', (e) => {
          if (e.currentTarget.pageYOffset >= menuOffsetTop) {
            $header
              .addClass(classFixed)
              .css({'padding-bottom': $menu.css('height')})
          } else {
            $header
              .removeClass(classFixed)
              .removeAttr('style')
          }
        })
      }

      $window.on('resize', (e) => {
        if (e.currentTarget.innerWidth <= mobileWidth) {
          $window.unbind('scroll')
        }
      })

    }

  })
})(jQuery)
