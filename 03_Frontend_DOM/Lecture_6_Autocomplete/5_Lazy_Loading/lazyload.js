document.addEventListener('DOMContentLoaded', () => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver is not supported');
        // Fallback: Load all images immediately if IntersectionObserver is not supported
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
        return; // Exit the function if IntersectionObserver is not supported
    }

    // Select all images that have a `data-src` attribute
    const images = document.querySelectorAll('img[data-src]');

    // Define the image loading function
    const loadImage = (image) => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.removeAttribute('data-src');
            console.log(`Loaded image: ${src} at time ${Date.now()}`); // Log the loaded image URL
        }
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the image is in the viewport
            if (entry.isIntersecting) {
                loadImage(entry.target); // Load the image
                observer.unobserve(entry.target); // Stop observing the loaded image
            }
        });
    }, {
        rootMargin: '100px', // Load images 100px before they enter the viewport
        threshold: 0.01 // Trigger when 1% of the target is visible
    });

    // Observe each image for viewport entry
    images.forEach(image => {
        observer.observe(image);
    });
});
