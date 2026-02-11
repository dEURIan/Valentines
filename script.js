// Create floating hearts in the background
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-bg';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts every 500ms
setInterval(createHeart, 500);

// Track number of times "No" button is clicked
let noClickCount = 0;

// Handle "Yes" button click
function handleYes() {
    const response = document.getElementById('response');
    response.style.display = 'block';
    response.innerHTML = `
        <div class="celebration">🎉 💖 🎊</div>
        <h2>YIPPEE! 😊</h2>
        <img src="cat.gif" alt="Yipee">
        <button class="click-me-btn" id="clickMeBtn">Click Me 💌</button>
    `;
    
    // Hide buttons after response
    document.querySelector('.buttons').style.display = 'none';
    
    // Add event listener to the new button
    document.getElementById('clickMeBtn').addEventListener('click', openLetter);
}

// Handle "Click Me" button to show letter
function openLetter() {
    const response = document.getElementById('response');
    response.innerHTML = `
        <div class="letter">
            <div class="letter-header">💌 A Letter For You 💌</div>
            <div class="letter-content">
                <p>Dear Valentine,</p>
                <p>From the moment I first saw you, my heart knew you were special. Every moment we spent together is a memory I will cherish until I die, your laughter is like music and your smile is like a painting. You are a fine glass of wine and I'm the luckiest man on earth to be the chalice that holds you.</p>
                <p>I'm sorry for all the fights we've had, all the hurt I've caused, and the doubt that sets in because of it. I promise to become the partner that you deserve and the partner that you saw in me. I love you with all my heart.</p>
                <p>You mean the world to me and the way I treat will show that from now on, you deserve a man who you can rest your heart easy with. I will become that man</p>
                <p>God has gifted you to me, and I will take care of you from now on po</p>
                <p>With all my love,</p>
                <p class="signature">Your Valentine</p>
            </div>
        </div>
    `;
}

// Handle "No" button click
function handleNo() {
    const noBtn = document.getElementById('noBtn');
    noClickCount++;

    // Different messages for each click
    const messages = [
        "Are you sure? 🥺",
        "Please? Pretty please?",
        "Why not?:(",
        "Sige na bah:(",
        "grabe ka:(",
        "sobra na ni na:<",
        "please?:(("
    ];

    if (noClickCount < messages.length) {
        // Change button text
        noBtn.textContent = messages[noClickCount];
    } else {
        // After all messages, make the button move away
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        // Calculate available space within the viewport
        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;
        
        const x = Math.random() * Math.max(0, maxX);
        const y = Math.random() * Math.max(0, maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.zIndex = '1000';
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    yesBtn.addEventListener('click', handleYes);
    noBtn.addEventListener('click', handleNo);
});
