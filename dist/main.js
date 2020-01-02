(function() {
  var scroll;

  document.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      return document.querySelector('nav').classList.remove('hidden');
    } else {
      return document.querySelector('nav').classList.add('hidden');
    }
  });

  smoothScroll = function(to) {
    return window.scrollTo({
      top: to,
      left: 0,
      behavior: 'smooth'
    });
  };

}).call(this);
