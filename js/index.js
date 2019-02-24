var $ = window.$
var selectedSlide = 1
var slideCount = null
var slideWidth = null
var slideHeight = null
var sliderFullWidth = null

$(document).ready(function () {
  $(window).on('scroll', function () {
    if (getDevice() !== 'mobile') {
      animateNav()
    }
  })
  
  // $(window).on('load', function () {
  $(window).on('resize load', function () {
    var device = getDevice()
    if (device === 'mobile') {
      closeMobileNav()
      handleMobileNav()
    } else if (device === 'tablet') {
      closeMobileNav()
    } else {
      closeMobileNav()
    }
  })
  
  function getDevice () {
    var width = $(window).width()
    if (width <= 640) {
      return 'mobile'
    } else if (width > 640 && width <= 1024) {
      return 'tablet'
    } else {
      return 'desktop'
    }
  }
  
  function animateNav () {
    var scrollPosition = $(document).scrollTop()
  
    if (scrollPosition < 20) {
      $('.nav').removeClass('notTop')
    } else {
      $('.nav').addClass('notTop')
    }
  }
  
  function handleMobileNav () {
    $('.mobileNavButton').on('click tap', function () {
      if ($('.mobileNavButton').hasClass('open')) {
        closeMobileNav()
      } else {
        openMobileNav()
      }
    })
  }
  
  function openMobileNav () {
    if ($('.mobileNavButton').hasClass('closed')) {
      $('.mobileNavButton').removeClass('closed')
      $('.mobileNavButton').addClass('open')
      $('.mobileNavWrapper').removeClass('closed')
      $('.mobileNavWrapper').addClass('open')
      $('.bodyContainer').removeClass('closed')
      $('.bodyContainer').addClass('open')
    }
  }
  
  function closeMobileNav () {
    if ($('.mobileNavButton').hasClass('open')) {
      $('.mobileNavButton').removeClass('open')
      $('.mobileNavButton').addClass('closed')
      $('.mobileNavWrapper').removeClass('open')
      $('.mobileNavWrapper').addClass('closed')
      $('.bodyContainer').removeClass('open')
      $('.bodyContainer').addClass('closed')
    }
  }

  $('.name').on('click tap', function () {
    $('html, body').animate({ scrollTop: 0 }, 750)
    return false
  })

  $('.work').on('click tap', function () {
    closeMobileNav()
    
    var target = $('.section.work').offset()
    target.top = target.top - 50
    
    $('html, body').animate({
      scrollTop: target.top
    }, 750);
  })

  $('.slide').css({width: window.innerWidth})
  slideCount = $('.slider ul li').length
  slideWidth = $('.slider ul li').width()
  sliderFullWidth = (slideCount * slideWidth)

  $('.slider').css({ width: slideWidth })
  $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
  $('.slider ul li:last-child').prependTo('.slider ul')

  $(window).on('resize', function () {
    $('.slide').css({width: window.innerWidth})
    slideCount = $('.slider ul li').length
    slideWidth = $('.slider ul li').width()
    sliderFullWidth = (slideCount * slideWidth)

    $('.slider').css({ width: slideWidth, height: slideHeight })
    $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
    $('.slider ul li:last-child').prependTo('.slider ul')
  })

  $('a.control_prev').click(function () {
    moveLeft(slideWidth)
    setDot('prev')
  })

  $('a.control_next').click(function () {
    moveRight(slideWidth)
    setDot('next')
  })
})

function setDot (direction) {
  if (direction === 'next') {
    if (selectedSlide === $('.slide').length) {
      selectedSlide = 1
    } else {
      selectedSlide++
    }
  } else {
    if (selectedSlide === 1) {
      selectedSlide = $('.slide').length
    } else {
      selectedSlide--
    }
  }

  $('.dot.selected').removeClass('selected')
  $($('.dot')[selectedSlide - 1]).addClass('selected')
}

function moveRight (slideWidth) {
  $('.slider ul').animate({
    left: -slideWidth
  }, 750, function () {
    $('.slider ul li:first-child').appendTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}

function moveLeft (slideWidth) {
  $('.slider ul').animate({
    left: +slideWidth
  }, 750, function () {
    $('.slider ul li:last-child').prependTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}
