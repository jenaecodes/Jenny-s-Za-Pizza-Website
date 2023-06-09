"use strict";

  // HTML for pizza menu card details
  function generateProductHTML(product, productIndex) {
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3";

    const cardContent = `
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Price: $${product.price}</p>
        <a class="btn btn-primary custom-button" onclick="displayProductDetails(${productIndex})">See Details</a><br>
        <button class="btn btn-success mt-2 custom-btn" onclick="addToCart(${productIndex})">Add to Cart</button>
      </div>
    </div>
  `;

    card.innerHTML = cardContent;
    return card;
  }

  // search results based on what's selected
function displaySearchResults() {
    const searchBy = document.getElementById("searchBy").value;
    const category = document.getElementById("category").value;
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
  
    if (searchBy === "viewAll") {
      const sortedProducts = pizzaMenu.slice().sort((a, b) => a.name.localeCompare(b.name));
  
      sortedProducts.forEach((product, index) => {
        const productHTML = generateProductHTML(product, index);
        resultsContainer.appendChild(productHTML);
      });
    } else if (searchBy === "searchCategory") {
      if (category === "selectOne") {
        // I wanted nothing to show if the dropdown menu says "select one"
        return;
      }
  
      // vegetarian vs meat-eater
      const filteredProducts = pizzaMenu.filter((product) => {
        if (category === "vegetarian") {
          return product.vegetarian;
        } else if (category === "nonVegetarian") {
          return !product.vegetarian;
        }
        return true; // otherwise, show everything
      });
  
      // sort alphabetically
      const sortedProducts = filteredProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
  
      sortedProducts.forEach((product, index) => {
        const productHTML = generateProductHTML(product, index);
        resultsContainer.appendChild(productHTML);
      });
    }
  }

  // search by dropdown
  document.getElementById("searchBy").addEventListener("change", function() {
    const categoryContainer = document.getElementById("categoryContainer");
    const searchBy = this.value;
    categoryContainer.style.display = searchBy === "searchCategory" ? "block" : "none";
    displaySearchResults();
  });

  // category dropdown
  document.getElementById("category").addEventListener("change", function() {
    displaySearchResults();
  });

  // display the output
  displaySearchResults();