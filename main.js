const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeBtn.textContent = 'Light Mode';
    }
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light-mode';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    numbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    });
});
