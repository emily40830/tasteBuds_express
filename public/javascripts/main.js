// navbar scroll down
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('header-down')
  } else {
    $('header').removeClass('header-down')
  }
})

// navbar in mobile width
$(document).ready(function () {
  $('#header_responsive_icon').click(function () {

    $('.menu').toggleClass('active')
    // console.log('click')
  })
})

// scroll down after search
const path = window.location.pathname
if (path === '/search') {
  const footer = document.querySelector('.footer')
  window.addEventListener('load', () => {
    footer.scrollIntoView({ behavior: 'smooth' })
  })
}