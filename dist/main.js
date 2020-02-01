(function() {
  var smoothScroll;

  document.addEventListener('scroll', function() {
    var nav;
    nav = document.querySelector('nav');
    if (window.scrollY > 10) {
      return nav.classList.remove('hidden');
    } else {
      return nav.classList.add('hidden');
    }
  });

  smoothScroll = function(top) {
    return window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  };

}).call(this);
