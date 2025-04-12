document.getElementById('enter-button').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Fade out the welcome screen
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none'; // Hide the welcome screen
        mainContent.style.display = 'block'; // Show the main content
        mainContent.style.opacity = '1'; // Fade in the main content
    }, 500); // Match the duration of the fade-out effect

    loadPhotos(); // Load photos from local storage
});

// Dummy loadPhotos function to avoid errors
function loadPhotos() {
    console.log("Loading photos..."); // Placeholder for actual photo loading logic
    // Here you can add the logic to load photos from local storage
}
