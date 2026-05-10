document.addEventListener('DOMContentLoaded', function () {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var content = item.querySelector('.faq-content');
      var icon = item.querySelector('.faq-icon');

      var isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(function (c) {
        c.classList.add('hidden');
      });
      document.querySelectorAll('.faq-icon').forEach(function (i) {
        i.style.transform = 'rotate(0deg)';
      });

      // Toggle current
      if (isOpen) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Scroll animations
  var animatedElements = document.querySelectorAll('.animate-on-scroll');
  var observer = null;

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animatedElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Contact form handling
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(contactForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // Basic validation
      var name = data.name && data.name.trim();
      var phone = data.phone && data.phone.trim();

      if (!name || !phone) {
        alert('Пожалуйста, заполните обязательные поля.');
        return;
      }

      // Phone validation (simple)
      var phoneClean = phone.replace(/[\s\-\(\)]/g, '');
      if (phoneClean.length < 10) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return;
      }

      // Simulate form submission
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Отправка...';
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.textContent = 'Заявка отправлена!';
        submitBtn.classList.remove('bg-primary-700', 'hover:bg-primary-800');
        submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');

        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
          submitBtn.classList.add('bg-primary-700', 'hover:bg-primary-800');
        }, 3000);
      }, 1000);
    });
  }

  // Phone mask
  var phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var value = phoneInput.value.replace(/\D/g, '');
      var formatted = '';

      if (value.length > 0) {
        if (value[0] === '7' || value[0] === '8') {
          formatted = '+7';
          if (value.length > 1) formatted += ' (' + value.substring(1, 4);
          if (value.length > 4) formatted += ') ' + value.substring(4, 7);
          if (value.length > 7) formatted += '-' + value.substring(7, 9);
          if (value.length > 9) formatted += '-' + value.substring(9, 11);
        } else {
          formatted = '+' + value;
        }
      }

      phoneInput.value = formatted;
    });

    phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
        phoneInput.value = '+7';
      }
    });

    phoneInput.addEventListener('blur', function () {
      if (phoneInput.value === '+7' || phoneInput.value === '+7 (') {
        phoneInput.value = '';
      }
    });
  }

  // Nav shadow on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > 10) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 64;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
