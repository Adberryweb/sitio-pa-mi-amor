document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector('.heart-container');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración entre 2 y 5 segundos
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remueve el corazón después de 5 segundos
    }

    setInterval(createHeart, 300);
});
