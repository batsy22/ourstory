document.getElementById('enter-button').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Fade out the welcome screen
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.style.opacity = '1'; // Fade in the main content
    }, 500); // Match the duration of the fade-out effect

    loadPhotos(); // Load photos from local storage
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('photo-upload');
