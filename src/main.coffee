document.addEventListener 'scroll', ->
  nav = document.querySelector 'nav'
  if window.scrollY > 10
    nav.classList.remove 'hidden'
  else
    nav.classList.add 'hidden'

smoothScroll = (top) ->
  window.scrollTo
    top: top
    left: 0
    behavior: 'smooth'
