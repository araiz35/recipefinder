// Recipe Data Array [cite: 28, 29]
const myRecipes = [
    {
        name: "Classic Pancakes",
        category: "Breakfast",
        ingredients: ["Flour", "Milk", "Eggs", "Syrup"],
        instructions: "Whisk ingredients together. Pour onto a hot pan. Flip when bubbly!",
        img: "data:image/jpeg;base64,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"
    },
    {
        name: "Avocado Toast",
        category: "Lunch",
        ingredients: ["Bread", "Avocado", "Salt", "Lemon"],
        instructions: "Toast the bread. Mash avocado with lemon and salt. Spread on toast.",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400"
    },
    {
        name: "Berry Sorbet",
        category: "Dessert",
        ingredients: ["Frozen Berries", "Honey", "Water"],
        instructions: "Blend all ingredients until smooth. Serve immediately.",
        img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=400"
    }
];

const resultsDiv = document.getElementById('recipeResults');
const searchInput = document.getElementById('searchInput');

// Function to render recipes to the page [cite: 36, 47]
function showRecipes(list) {
    resultsDiv.innerHTML = ""; // Clear existing

    if (list.length === 0) {
        resultsDiv.innerHTML = "<p class='error-msg'>No recipes found for that search.</p>"; // [cite: 37]
        return;
    }

    list.forEach(recipe => {
        // Create the card element [cite: 47]
        const card = document.createElement('div');
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.name}">
            <div class="card-content">
                <h3>${recipe.name}</h3>
                <span class="tag">${recipe.category}</span>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <button class="view-btn">View Instructions</button>
                <div class="instructions">${recipe.instructions}</div>
                <hr>
                <button class="add-fav-btn">⭐ Add to Favorites</button>
            </div>
        `;

        // Toggle Instructions [cite: 53]
        const viewBtn = card.querySelector('.view-btn');
        viewBtn.addEventListener('click', function() {
            const textBox = card.querySelector('.instructions');
            textBox.classList.toggle('show');
            viewBtn.textContent = textBox.classList.contains('show') ? "Hide Steps" : "View Instructions";
        });

        // Add to Favorites [cite: 39]
        const favBtn = card.querySelector('.add-fav-btn');
        favBtn.addEventListener('click', () => saveToFavorites(recipe.name));

        resultsDiv.appendChild(card);
    });
}

// Search & Filter Logic [cite: 34, 35]
document.getElementById('searchBtn').onclick = function() {
    const query = searchInput.value.toLowerCase();
    
    // Checkboxes filter 
    const activeCheckboxes = Array.from(document.querySelectorAll('.cat-check:checked')).map(c => c.value);

    // Validation [cite: 49]
    if (query === "" && activeCheckboxes.length === 0) {
        alert("Please enter a keyword or pick a category!");
        return;
    }

    const filtered = myRecipes.filter(r => {
        const matchesText = r.name.toLowerCase().includes(query) || 
                            r.ingredients.some(i => i.toLowerCase().includes(query));
        
        const matchesCategory = activeCheckboxes.length === 0 || activeCheckboxes.includes(r.category);
        
        return matchesText && matchesCategory;
    });

    showRecipes(filtered);
};

// Favorites Logic [cite: 38, 40]
function saveToFavorites(name) {
    const favList = document.getElementById('favList');
    
    // Duplicate Check [cite: 50]
    const items = favList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].innerText.includes(name)) {
            alert("Already in your favorites!");
            return;
        }
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${name}</span>
        <button class="remove-btn">Remove</button>
    `;

    // Remove logic [cite: 44, 46]
    li.querySelector('.remove-btn').onclick = function() {
        this.parentElement.remove(); // Using DOM traversal [cite: 46]
    };

    favList.appendChild(li);
}

// Initial display
showRecipes(myRecipes);