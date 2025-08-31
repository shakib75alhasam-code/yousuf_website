/* File: script.js
   Site-wide JS: small animations, year insertion, and utilities.
   Note: Keep this light to remain static-site friendly.
*/
document.addEventListener('DOMContentLoaded', function(){
  // Insert current years in footers
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5','year6'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // Simple scroll reveal (no external libs)
  const revealEls = document.querySelectorAll('.card, .hero-text, .testimonial, .service-card');
  const revealOnScroll = (entries, obs) => {
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1), opacity .6s';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
        obs.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(revealOnScroll, {threshold: 0.12});
  revealEls.forEach(el=>{
    el.style.transform = 'translateY(20px)';
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').split('#')[1];
      if(!targetId) return;
      const target = document.getElementById(targetId);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Basic client-side form validation enhancement (progressive enhancement)
  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function(form){
    form.addEventListener('submit', function(event){
      if(!form.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});
