const faqBtns = document.querySelectorAll('.faq-toggle');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
});