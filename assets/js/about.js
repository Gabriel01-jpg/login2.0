const header = document.querySelector('#header');
const navHeight = header.offsetHeight
window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})