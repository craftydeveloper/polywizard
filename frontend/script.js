const PROXY_URL = '/api/polymarket-proxy';

async function fetchMarkets(category) {
  try {
    const res = await fetch(`${PROXY_URL}?q=${category}&limit=10`);
    const data = await res.json();
    return data.markets || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function loadCategory(category) {
  const predictionsDiv = document.getElementById('predictions');
  predictionsDiv.innerHTML = 'Loading...';

  const markets = await fetchMarkets(category);
  if (!markets.length) {
    predictionsDiv.innerHTML = '<p>No active predictions found for this category.</p>';
    return;
  }

  predictionsDiv.innerHTML = '';
  markets.forEach(m => {
    const prob = (m.yesPrice * 100).toFixed(1);
    const card = document.createElement('div');
    card.className = 'prediction-card';
    card.innerHTML = `
      <h3>${m.question}</h3>
      <p>Category: ${category}</p>
      <p>Yes Probability: <strong>${prob}%</strong></p>
      <p>Volume: $${(m.volume / 1000).toFixed(1)}k</p>
    `;
    predictionsDiv.appendChild(card);
  });
}

loadCategory('sports'); // Default
