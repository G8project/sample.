function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('is-active');
    document.getElementById('nav-wrapper').classList.toggle('is-active');
    document.getElementById('nav-wrapper-ul').classList.toggle('is-active');
    }
    document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
} );