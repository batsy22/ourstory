document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('upload-form').style.display = 'block'; // Show the upload form
    loadPhotos(); // Load photos from local storage
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('photo-upload');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgSrc = e.target.result;
        savePhoto(imgSrc); // Save photo to local storage
        displayPhoto(imgSrc); // Display photo in gallery
    };

    if (file) {
        reader.readAsDataURL(file);
        fileInput.value = ''; // Clear the input
    }
});

function savePhoto(imgSrc) {
    let photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.push(imgSrc);
    localStorage.setItem('photos', JSON.stringify(photos));
}

function loadPhotos() {
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.forEach(photo => {
        displayPhoto(photo);
    });
}

function displayPhoto(imgSrc) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('photo-container');

    const img = document.createElement('img');
    img.src = imgSrc;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
        deletePhoto(imgSrc, imgContainer);
    };

    imgContainer.appendChild(img);
    imgContainer.appendChild(deleteButton);
    document.getElementById('photo-gallery').appendChild(imgContainer);
}

function deletePhoto(imgSrc, imgContainer) {
    let photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos = photos.filter(photo => photo !== imgSrc);
    localStorage.setItem('photos', JSON.stringify(photos));
    imgContainer.remove(); // Remove the photo from the gallery
}