document.addEventListener('DOMContentLoaded', function() {

    // MENU MOBILE

    const menuToggle = document.querySelector('.menu-toggle');

    const mainNav = document.getElementById('main-nav');

    menuToggle && menuToggle.addEventListener('click', () => {

        mainNav.classList.toggle('active');

        menuToggle.classList.toggle('open');

    });

    // SCROLL SUAVE

    document.querySelectorAll('a[href^="#"]').forEach(a => {

        a.addEventListener('click', function(e) {

            const href = this.getAttribute('href');

            if (href.length > 1) {

                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {

                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }

                if (mainNav.classList.contains('active')) {

                    mainNav.classList.remove('active');

                }

            }

        });

    });

    // BOTÃO TOPO

    const btnTop = document.getElementById('btn-top');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {

            btnTop.style.display = 'block';

        } else {

            btnTop.style.display = 'none';

        }

    });

    btnTop && btnTop.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

    // REVEAL ANIMATION

    const revealElements = document.querySelectorAll(
        '.card-service, .alert-card, .contact-card'
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    }, {
        threshold: 0.2
    });

    revealElements.forEach((el) => {

        observer.observe(el);

    });

    // DARK MODE

    const themeToggle = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {

        document.body.classList.add('dark');

        themeToggle.textContent = '☀️';

    }

    themeToggle.addEventListener('click', () => {

        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {

            localStorage.setItem('theme', 'dark');

            themeToggle.textContent = '☀️';

        } else {

            localStorage.setItem('theme', 'light');

            themeToggle.textContent = '🌙';

        }

    });

    // ANO RODAPÉ

    const yearEl = document.getElementById('year');

    if (yearEl) {

        yearEl.textContent = new Date().getFullYear();

    }

});