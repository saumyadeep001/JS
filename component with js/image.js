// Array of image URLs
const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5'
];

// Get references to HTML elements
const generateBtn = document.getElementById('generate-btn');
const randomImage = document.getElementById('random-image');

// Add click event listener to the button
generateBtn.addEventListener('click', function() {
    // Generate a random index to select an image
    const randomIndex = Math.floor(Math.random() * images.length);

    // Set the src attribute of the img element to the selected image URL
    randomImage.src = images[randomIndex];

    // Display the image if it's hidden
    randomImage.style.display = 'block';
});
