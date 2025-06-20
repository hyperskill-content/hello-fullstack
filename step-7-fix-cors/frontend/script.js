// Get the button element by its ID
const button = document.getElementById('clickButton');
const cardsContainer = document.getElementById('cardsContainer');

// Track whether cards are currently visible
let cardsVisible = false;

// Add a click event listener to the button
button.addEventListener('click', async function() {
    if (cardsVisible) {
        // Hide the cards
        cardsContainer.innerHTML = '';
        cardsVisible = false;
    } else {
        // Fetch data from backend and show cards
        try {
            const response = await fetch('http://localhost:3000');
            const musicians = await response.json();
            
            // Create cards for each musician
            musicians.forEach(musician => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <h3>${musician.name}</h3>
                    <p>${musician.description}</p>
                `;
                cardsContainer.appendChild(card);
            });
            
            cardsVisible = true;
        } catch (error) {
            console.error('Error fetching data:', error);
            cardsContainer.innerHTML = '<p>Error loading data</p>';
        }
    }
});