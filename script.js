window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const navBtn = document.querySelector('.nav-toggler');

navBtn.addEventListener('click',navToggle);

function navToggle() {
    navBtn.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    if(nav.classList.contains('open')){
        nav.style.display='block';
    }
    else{
        nav.removeAttribute('style');
    }
}