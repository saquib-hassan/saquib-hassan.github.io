(function () {
  'use strict';

  // Mobile navigation
  var navToggle = document.getElementById('navToggle');
  var navOverlay = document.getElementById('navOverlay');
  var navClose = document.getElementById('navClose');
  var navLinks = document.querySelectorAll('[data-nav]');

  function openNav() {
    if (!navOverlay || !navToggle) return;
    navOverlay.classList.add('active');
    navOverlay.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!navOverlay || !navToggle) return;
    navOverlay.classList.remove('active');
    navOverlay.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeNav(); } else { openNav(); }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', function (e) {
      if (e.target === navOverlay) closeNav();
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
      closeNav();
    }
  });

  // Header shadow on scroll (subtle)
  var header = document.getElementById('siteHeader');
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;
    if (!header) return;
    if (scrollY > 10) {
      header.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = scrollY;
  }, { passive: true });
})();
