$('#service, #service_2, #projects, #projects_2, #contact, #info').on('click', function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
        $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 45.8
        }, 800);
  });
/*Intersection Observer*/
window.addEventListener('DOMContentLoaded', () => { 
const options = {
  root: null,
  threshold: 0.15
}
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add('is-inview');
            observer.unobserve(entry.target);
          }
        });
      }
    })
    }, options);
    const array = document.querySelectorAll('.description_list.lines.splitting, .description_title.words.splitting, .line_top, .projects_body_tab1.words.splitting, .footer_title.lines.splitting, .footer_link.lines.splitting, .projects_header_button_dot, .footer_top_item.lines.splitting, .footer_middle_item');
    array.forEach(i => {
        observer.observe(i);
    });
/* line transform */
const links = document.querySelectorAll('.link');
links.forEach((link) => {
   link.addEventListener('mouseenter', function activeLink(){
      this.classList.add('active');
      this.classList.remove('inactive');
      activeLink();
   })
});
links.forEach((link) => {
   link.addEventListener('mouseleave', function inactiveLink(){
    this.classList.add('inactive');
    this.classList.remove('active');
    inactiveLink(); 
 })
});
/*const tab1 = document.getElementById('tab-1'),
      tab2 = document.getElementById('tab-2'),
      content1 = document.querySelector('.projects_body_tab1'),
      content2 = document.querySelector('.projects_body_tab2'),
      dotCurrent1 = document.querySelectorAll('.projects_header_button_dot')[0],
      dotCurrent2 = document.querySelectorAll('.projects_header_button_dot')[1];
tab2.addEventListener('click', function showCurrentTab2(){
  content1.classList.remove('current');
  content2.classList.add('current');
  dotCurrent1.classList.remove('current');
  dotCurrent2.classList.add('current');
  showCurrentTab2();
});
tab1.addEventListener('click', function showCurrentTab1(){
  content2.classList.remove('current');
  content1.classList.add('current');
  dotCurrent2.classList.remove('current');
  dotCurrent1.classList.add('current');
  showCurrentTab1();
});
*/
/*Parralax slider*/
const lenis = new Lenis({
    duration: 1.5,
    smooth: true
  });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1500); 
  gsap.ticker.lagSmoothing(0);
});
 gsap.registerPlugin(ScrollTrigger);
 const cards = document.querySelectorAll('.projects_card');
 cards.forEach((card) => {
  if (card) {
    card.style.backgroundPosition = `50% ${innerHeight / 4}px`;
    gsap.to(card, {
      backgroundPosition: `50% ${-innerHeight / 4}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        scrub: 0.1
      }
    });
  }   
  else {
    card.backgroundPosition = '50% 0px'; 
    gsap.to(card, {
      backgroundPosition: `50% ${-innerHeight / 4}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top', 
        end: 'bottom top',
        scrub: 0.1
      }
    });
  }
});

});
  




    












