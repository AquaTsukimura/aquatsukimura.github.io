
  const quotes = [
    { text: "Lies are a refined form of love.", author: "Ai Hoshino" },
    { text: "I want to love someone for real.", author: "Ai Hoshino" },
    { text: "Lying is the best way to protect yourself.", author: "Ai Hoshino" },
    { text: "Even if it's a lie, I want to be someone who can say 'I love you'.", author: "Ai Hoshino" },
    { text: "A star is someone who shines the brightest in the dark.", author: "B-Komachi" }
  ];

  let currentQuote = 0;
  const quoteEl = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');

  function updateQuote() {
    quoteEl.classList.add('fade-out');
    setTimeout(() => {
      currentQuote = (currentQuote + 1) % quotes.length;
      quoteEl.textContent = `"${quotes[currentQuote].text}"`;
      authorEl.textContent = `— ${quotes[currentQuote].author}`;
      quoteEl.classList.remove('fade-out');
    }, 500);
  }

  setInterval(updateQuote, 5000);

  const starField = document.getElementById('star-field');
  function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.opacity = Math.random();
    
    starField.appendChild(star);
    
    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  setInterval(createStar, 100);
