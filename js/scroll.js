/* SHOW SCROLL TOP */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.slideshow-container, .category,
            .article-side, .sidebar-side,
            .subscribe-content, .footer,
            .footer-row, .post-content,
            .about-content, .contact-content,
            .post-side`, {
    interval: 200
})