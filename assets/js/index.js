// Toggle Menu Functionaliy Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("body").removeClass("menuToggle");
  });
});

// Toggle Menu Functionaliy End

// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// Scroll to next section Start

(function () {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    const nextSection = window.innerHeight;

    window.scrollTo({
      top: nextSection,
      behavior: "smooth"
    });
  }

  if (btnScrollDown) {
    btnScrollDown.addEventListener('click', scrollDown);
  }
})();

// Scroll to next section End


// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End




let topButton = document.getElementById("topBtn");

// Show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Scroll to top when clicked
topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
