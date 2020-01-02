document.addEventListener 'scroll', ->
  if window.scrollY > 10
    document.querySelector('nav').classList.remove 'hidden'
  else
    document.querySelector('nav').classList.add 'hidden'

scroll = (top) ->
  window.scrollTo
    top: top
    left: 0
    behavior: 'smooth'
