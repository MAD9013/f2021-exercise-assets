function init() {

  // Nav Toggle

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const masthead = document.querySelector('.masthead');
  const toTop = document.querySelector('.to-top');

  function toggleNav(e) {
    e.preventDefault();
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  }

  navToggle && navToggle.addEventListener('click', toggleNav);

  // Sticky Nav

  function stickyNav() {
    if (window.scrollY > 50) {
      masthead && masthead.classList.add('sticky');
      toTop && toTop.classList.add('visible');
    } else {
      masthead && masthead.classList.remove('sticky');
      toTop && toTop.classList.remove('visible');
    }
  }

  stickyNav();

  window.addEventListener('scroll', stickyNav);
  
  const faqs = document.querySelectorAll('.faqs__item');

  function FAQs(faq) {
    
    if ( ! (faq instanceof Element) ) {
      return;
    }

    const btn = faq.querySelector('.faqs__button');

    function activate(e) {
      e.preventDefault();
      const active = faq.classList.contains('active');
      
      faqs.forEach(item => {
        item.classList.remove('active');
      })
      
      !active && faq.classList.add('active');
    }

    btn.addEventListener('click', activate);

  }


  faqs.forEach(faq => {
    FAQs(faq);
  })

}

document.addEventListener('DOMContentLoaded', init);
