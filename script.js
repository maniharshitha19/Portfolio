// Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
    typeText();
});

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    this.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Typing Text Animation
function typeText() {
    const text = "Web Enthusiast | Cloud Security Learner | Aspiring Machine Learning Engineer";
    const typingEl = document.querySelector('.typing-text');
    let index = 0;
    function type() {
        if (index < text.length) {
            typingEl.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Back to Top Button
const topButton = document.querySelector('.back-to-top');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};
topButton.onclick = function() {
    document.documentElement.scrollTop = 0;
};
