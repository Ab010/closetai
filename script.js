// Join Waitlist Button Functionality
document.querySelectorAll('.join-waitlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for joining the waitlist! We will notify you when ClosetAI is ready.');
    });
});

// Learn More Button Functionality
document.querySelector('.learn-more-btn').addEventListener('click', () => {
    alert('ClosetAI helps you organize your wardrobe, select outfits based on weather, and more!');
});
