const fullScreenImages = document.querySelectorAll('fullscreen-image');

fullScreenImages.forEach(image => {
    image.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            image.classList.add('fullscreen');
            image.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`
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