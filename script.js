/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById('cur');
const ring = document.getElementById('ring');

document.addEventListener('mousemove', e => {
  cur.style.left  = e.clientX + 'px';
  cur.style.top   = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  }, 90);
});

document.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform  = 'scale(2.8) translate(-50%,-50%)';
    ring.style.transform = 'scale(.4) translate(-50%,-50%)';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.transform  = 'translate(-50%,-50%)';
    ring.style.transform = 'translate(-50%,-50%)';
  });
});

/* ── NAV SCROLL SHADOW ── */
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-mode");
    themeBtn.innerHTML='<i class="fas fa-lightbulb"></i>';
}else{
    themeBtn.innerHTML='<i class="fas fa-moon"></i>';
}

themeBtn.onclick=()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        themeBtn.innerHTML='<i class="fas fa-lightbulb"></i>';
    }else{
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML='<i class="fas fa-moon"></i>';
    }

};

/* ── CONTACT FORM ── */
/* ── CONTACT FORM ── */
/* ── CONTACT FORM ── */

emailjs.init("5JAMGMHcaQIffa2sI");

document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    const btn = document.getElementById("sendBtn");

    emailjs.sendForm(
        "service_g75fik4",
        "template_9nr6znf",
        this
    )
    .then(() => {

        btn.textContent = "✓ Sent!";
        btn.style.background = "#4ade80";
        btn.style.color = "#080a0e";

        this.reset();

        setTimeout(() => {
            btn.textContent = "Send Message →";
            btn.style.background = "";
            btn.style.color = "";
        }, 3000);

    })
    .catch((error) => {

        console.log(error);

        alert(
            "Send failed:\n" +
            JSON.stringify(error)
        );

    });

});