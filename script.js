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

    function checkVisibility() {
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;
            if (imageTop < window.innerHeight) {
                image.classList.add('image-animate');
            } else {
                image.classList.remove('image.animate');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});

