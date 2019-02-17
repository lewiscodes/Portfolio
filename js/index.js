var $ = window.$

$('.name').on('click tap', function () {
  $('html, body').animate({ scrollTop: 0 }, 'fast')
  return false
})
