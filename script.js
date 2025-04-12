document.getElementById('enter-button').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Fade out the welcome screen
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.style.opacity = '1';
    }, 500);
});

// Initialize an array to hold uploaded photos and captions
let photos = JSON.parse(localStorage.getItem('photos')) || [];

// Handle photo upload
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('photo-upload');
    const captionInput = document.getElementById('photo-caption');
    const file = fileInput.files[0];
    const caption = captionInput.value;

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Add the photo and caption to the array
            photos.push({ src: e.target.result, caption: caption });
            localStorage.setItem('photos', JSON.stringify(photos)); // Save to local storage
            displayPhotos();
        };
        reader.readAsDataURL(file);
        fileInput.value = ''; // Clear the input
        captionInput.value = ''; // Clear the caption input
    }
});

// Function to display photos and captions
function displayPhotos() {
    const photoGallery = document.getElementById('photo-gallery');
    photoGallery.innerHTML = ''; // Clear the gallery

    photos.forEach((photoObj, index) => {
        const photoContainer = document.createElement('div');
        photoContainer.className = 'photo-container';

        const img = document.createElement('img');
        img.src = photoObj.src;
        img.alt = 'Uploaded Photo';

        const caption = document.createElement('p');
        caption.textContent = photoObj.caption;
        caption.className = 'photo-caption'; // Add a class for styling

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            deletePhoto(index);
        };

        photoContainer.appendChild(img);
        photoContainer.appendChild(caption);
        photoContainer.appendChild(deleteButton);
        photoGallery.appendChild(photoContainer);
    });
}

// Function to delete a photo
function deletePhoto(index) {
    photos.splice(index, 1); // Remove the photo from the array
    localStorage.setItem('photos', JSON.stringify(photos)); // Update local storage
    displayPhotos(); // Refresh the photo gallery
}

// Load photos from local storage when the page loads
window.onload = function() {
    displayPhotos();
};