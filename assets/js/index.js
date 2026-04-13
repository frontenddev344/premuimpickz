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

// Form Validation Start

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const fields = ["name", "email", "phone", "subject", "message"];

    fields.forEach(id => {
        const input = document.getElementById(id);
        const error = input.nextElementSibling;

        input.value = input.value.trim();
        error.textContent = "";
        input.classList.remove("error-border");
    });


    const name = document.getElementById("name");
    if (!/^[A-Za-z\s]{3,50}$/.test(name.value)) {
        showError(name, "Enter a valid name (3-50 letters only)");
        isValid = false;
    }


    const email = document.getElementById("email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value)) {
        showError(email, "Enter a valid email address");
        isValid = false;
    }

   
    const phone = document.getElementById("phone");
    if (phone.value !== "" && !/^[6-9]\d{9}$/.test(phone.value)) {
        showError(phone, "Enter valid 10-digit phone number");
        isValid = false;
    }

    const subject = document.getElementById("subject");
    if (subject.value.length < 5) {
        showError(subject, "Subject must be at least 5 characters");
        isValid = false;
    }


    const message = document.getElementById("message");
    if (message.value.length < 10) {
        showError(message, "Message must be at least 10 characters");
        isValid = false;
    }

    if (isValid) {
        form.submit(); 
    }
});

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("error-border");
}

// Form Validation End

