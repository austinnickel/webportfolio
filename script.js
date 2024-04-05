const fullScreenImages = document.querySelectorAll('.fullscreen-image');

fullScreenImages.forEach(image => {
    image.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            image.classList.add('fullscreen');
            image.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name}`)
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});

document.addEventListener('fullscreenchange', () => {
    fullScreenImages.forEach(image => {
        if(!document.fullscreenElement) {
            image.classList.remove('fullscreen');
        }
    });
} );


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const contactBanner = document.getElementById('contact-banner');
    const lines = contactBanner.querySelectorAll('.contact-line');

    function checkVisibility() {
        const viewportHeight = window.innerHeight;

        images.forEach((image, index) => {
            const imageTop = image.getBoundingClientRect().top;
            const imageVisible = imageTop < viewportHeight;

            if (imageVisible) {
            
                image.classList.add('visible');
                
            } else {
                image.classList.remove('visible');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', throttle(checkVisibility, 100));

    function revealOnScroll() {
        const bounding =contactBanner.getBoundingClientRect();
        const isVisible = (bounding.top >= 0) && (bounding.bottom <= window.innerHeight);

        if (isVisible) {
            lines.forEach((line, index) => {
                line.style.transitionDelay = `${index * 0.1}s`;
                line.classList.add('line-reveal')
            });
            
            window.removeEventListener('scroll', revealOnScroll);

        }
    }

    window.addEventListener('scroll', revealOnScroll);
});

 function throttle(func, delay) {
    let timeoutId;
    return function() {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, arguments);
                timeoutId = null;
            }, delay);
        }
    };
} 

