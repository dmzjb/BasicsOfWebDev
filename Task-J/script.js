// 1. Get all necessary elements
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.catalog-card');

/**
 * Function responsible for filtering product cards.
 * @param {string} filterValue - The filter criterion (e.g., 'ps4', 'all').
 */
function filterProducts(filterValue) {
    productCards.forEach(card => {
        // Get the category from the data-category attribute on the card
        const cardCategory = card.getAttribute('data-category');
        
        // Check if the card matches the selected filter
        // It matches if the filter is 'all' OR if the card's category equals the filter value
        const isMatch = (filterValue === 'all' || cardCategory === filterValue);

        if (isMatch) {
            // If it matches, show the card (remove the 'hidden' class)
            card.classList.remove('hidden');
        } else {
            // If it doesn't match, hide the card (add the 'hidden' class)
            card.classList.add('hidden');
        }
    });
}

// 2. Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Add 'active' class to the clicked button
        button.classList.add('active');
        
        // 3. Get the filter value from the data-filter attribute
        const filterValue = button.getAttribute('data-filter');
        
        // 4. Call the filtering function
        filterProducts(filterValue);
    });
});