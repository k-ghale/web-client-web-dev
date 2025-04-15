let images = [];
let currentIndex = 0;
let timer = null;

function loadImageList(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'imagelist.txt', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const lines = xhr.responseText.trim().split('\n');
            images = lines.map(line => {
                const [filename, duration] = line.split(',');
                return {
                    src: 'images/' + filename.trim(),
                    duration: parseInt(duration.trim())
                };
            });
            if (callback) callback();
        }
    };
    xhr.send();
}

function showImage(index) {
    if (images.length === 0) return;

    const image = images[index];
    const $img = $('#gallery-image');

    clearTimeout(timer);
    $img.fadeOut(500, function () {
        $img.attr('src', image.src).fadeIn(500);
    });

    timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, image.duration);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function updateGallery() {
    loadImageList(() => {
        currentIndex = 0;
        showImage(currentIndex);
    });
}

$(document).ready(() => {
    $('#prev').click(prevImage);
    $('#next').click(nextImage);
    $('#update').click(updateGallery);

    updateGallery();
});



