// Simple animation for hearts
document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelector('.hearts');
    setInterval(() => {
        hearts.style.transform = 'scale(1.1)';
        setTimeout(() => {
            hearts.style.transform = 'scale(1)';
        }, 500);
    }, 2000);
});