"use strict";

  const pizzaMenu = [
    {
      name: "Margherita",
      description: "Classic Italian pizza topped with tomatoes, mozzarella cheese, and fresh basil.",
      ingredients: [
        "Tomatoes",
        "Mozzarella cheese",
        "Fresh basil",
        "Olive oil",
        "Salt",
        "Black pepper"
      ],
      price: 12.99,
      size: {
        small: 9.99,
        medium: 12.99,
        large: 15.99
      },
      vegetarian: true
    },
    {
      name: "Pepperoni",
      description: "Traditional pizza topped with pepperoni slices and mozzarella cheese.",
      ingredients: [
        "Pepperoni",
        "Mozzarella cheese",
        "Tomato sauce",
        "Oregano",
        "Olive oil"
      ],
      price: 14.99,
      size: {
        small: 11.99,
        medium: 14.99,
        large: 17.99
      },
      vegetarian: false
    },
    {
      name: "Vegetarian",
      description: "Delicious pizza loaded with a variety of fresh vegetables.",
      ingredients: [
        "Mushrooms",
        "Bell peppers",
        "Onions",
        "Black olives",
        "Tomatoes",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 13.99,
      size: {
        small: 10.99,
        medium: 13.99,
        large: 16.99
      },
      vegetarian: true
    },
    {
      name: "Hawaiian",
      description: "Sweet and savory pizza topped with ham, pineapple, and mozzarella cheese.",
      ingredients: [
        "Ham",
        "Pineapple",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 15.99,
      size: {
        small: 12.99,
        medium: 15.99,
        large: 18.99
      },
      vegetarian: false
    },
    {
      name: "BBQ Chicken",
      description: "Flavorful pizza topped with BBQ chicken, red onions, and mozzarella cheese.",
      ingredients: [
        "BBQ chicken",
        "Red onions",
        "Mozzarella cheese",
        "BBQ sauce"
      ],
      price: 16.99,
      size: {
        small: 13.99,
        medium: 16.99,
        large: 19.99
      },
      vegetarian: false
    },
    {
      name: "Meat Lover's",
      description: "A carnivore's delight! Topped with a variety of meats and mozzarella cheese.",
      ingredients: [
        "Pepperoni",
        "Italian sausage",
        "Bacon",
        "Ground beef",
        "Ham",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 17.99,
      size: {
        small: 14.99,
        medium: 17.99,
        large: 20.99
      },
      vegetarian: false
    },
    {
      name: "Supreme",
      description: "A combination of meats and vegetables, creating a supreme pizza experience.",
      ingredients: [
        "Pepperoni",
        "Italian sausage",
        "Mushrooms",
        "Bell peppers",
        "Onions",
        "Black olives",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 16.99,
      size: {
        small: 13.99,
        medium: 16.99,
        large: 19.99
      },
      vegetarian: false
    },
    {
      name: "Mediterranean",
      description: "A taste of the Mediterranean with feta cheese, olives, and sun-dried tomatoes.",
      ingredients: [
        "Feta cheese",
        "Kalamata olives",
        "Sun-dried tomatoes",
        "Red onions",
        "Mozzarella cheese",
        "Tomato sauce",
        "Olive oil",
        "Oregano"
      ],
      price: 14.99,
      size: {
        small: 11.99,
        medium: 14.99,
        large: 17.99
      },
      vegetarian: true
    },
    {
      name: "Four Cheese",
      description: "A cheesy delight with mozzarella, cheddar, feta, and Parmesan cheeses.",
      ingredients: [
        "Mozzarella cheese",
        "Cheddar cheese",
        "Feta cheese",
        "Parmesan cheese",
        "Tomato sauce",
        "Olive oil",
        "Oregano"
      ],
      price: 15.99,
      size: {
        small: 12.99,
        medium: 15.99,
        large: 18.99
      },
      vegetarian: true
    },
    {
      name: "Spinach and Feta",
      description: "Delicious combination of spinach, feta cheese, and tomatoes.",
      ingredients: [
        "Spinach",
        "Feta cheese",
        "Tomatoes",
        "Mozzarella cheese",
        "Garlic",
        "Olive oil"
      ],
      price: 13.99,
      size: {
        small: 10.99,
        medium: 13.99,
        large: 16.99
      },
      vegetarian: true
    },
    {
      name: "Buffalo Chicken",
      description: "Spicy pizza topped with buffalo chicken, red onions, and mozzarella cheese.",
      ingredients: [
        "Buffalo chicken",
        "Red onions",
        "Mozzarella cheese",
        "Ranch dressing"
      ],
      price: 16.99,
      size: {
        small: 13.99,
        medium: 16.99,
        large: 19.99
      },
      vegetarian: false
    },
    {
      name: "Barbecue Bacon",
      description: "A flavor-packed pizza topped with barbecue sauce, bacon, and mozzarella cheese.",
      ingredients: [
        "Bacon",
        "Mozzarella cheese",
        "BBQ sauce",
        "Red onions",
        "Cilantro"
      ],
      price: 15.99,
      size: {
        small: 12.99,
        medium: 15.99,
        large: 18.99
      },
      vegetarian: false
    },
    {
      name: "Chicken Alfredo",
      description: "Creamy Alfredo sauce topped with grilled chicken and mozzarella cheese.",
      ingredients: [
        "Grilled chicken",
        "Mozzarella cheese",
        "Alfredo sauce",
        "Garlic",
        "Parsley"
      ],
      price: 17.99,
      size: {
        small: 14.99,
        medium: 17.99,
        large: 20.99
      },
      vegetarian: false
    },
    {
      name: "Pesto",
      description: "Delicious pizza topped with pesto sauce, tomatoes, and mozzarella cheese.",
      ingredients: [
        "Pesto sauce",
        "Tomatoes",
        "Mozzarella cheese",
        "Garlic",
        "Parmesan cheese",
        "Olive oil"
      ],
      price: 14.99,
      size: {
        small: 11.99,
        medium: 14.99,
        large: 17.99
      },
      vegetarian: true
    },
    {
      name: "BBQ Pork",
      description: "Savory pizza topped with barbecue pork, red onions, and mozzarella cheese.",
      ingredients: [
        "BBQ pork",
        "Red onions",
        "Mozzarella cheese",
        "BBQ sauce"
      ],
      price: 16.99,
      size: {
        small: 13.99,
        medium: 16.99,
        large: 19.99
      },
      vegetarian: false
    },
    {
      name: "Taco",
      description: "A taco-inspired pizza with seasoned ground beef, lettuce, tomatoes, and cheddar cheese.",
      ingredients: [
        "Seasoned ground beef",
        "Lettuce",
        "Tomatoes",
        "Cheddar cheese",
        "Sour cream",
        "Salsa"
      ],
      price: 15.99,
      size: {
        small: 12.99,
        medium: 15.99,
        large: 18.99
      },
      vegetarian: false
    },
    {
      name: "Chicken Bacon Ranch",
      description: "A delightful combination of grilled chicken, bacon, ranch dressing, and mozzarella cheese.",
      ingredients: [
        "Grilled chicken",
        "Bacon",
        "Mozzarella cheese",
        "Ranch dressing",
        "Tomatoes",
        "Red onions"
      ],
      price: 17.99,
      size: {
        small: 14.99,
        medium: 17.99,
        large: 20.99
      },
      vegetarian: false
    },
    {
      name: "Veggie Delight",
      description: "An assortment of fresh vegetables and mozzarella cheese.",
      ingredients: [
        "Mushrooms",
        "Bell peppers",
        "Onions",
        "Black olives",
        "Tomatoes",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 14.99,
      size: {
        small: 11.99,
        medium: 14.99,
        large: 17.99
      },
      vegetarian: true
    },
    {
      name: "White Pizza",
      description: "A cheese lover's dream with mozzarella, ricotta, and Parmesan cheeses.",
      ingredients: [
        "Mozzarella cheese",
        "Ricotta cheese",
        "Parmesan cheese",
        "Garlic",
        "Olive oil",
        "Oregano"
      ],
      price: 13.99,
      size: {
        small: 10.99,
        medium: 13.99,
        large: 16.99
      },
      vegetarian: true
    },
    {
      name: "Mushroom and Olive",
      description: "A delightful combination of mushrooms, black olives, and mozzarella cheese.",
      ingredients: [
        "Mushrooms",
        "Black olives",
        "Mozzarella cheese",
        "Tomato sauce",
        "Olive oil",
        "Oregano"
      ],
      price: 12.99,
      size: {
        small: 9.99,
        medium: 12.99,
        large: 15.99
      },
      vegetarian: true
    },
    {
      name: "Veggie Supreme",
      description: "A vegetarian delight loaded with a variety of fresh vegetables and mozzarella cheese.",
      ingredients: [
        "Mushrooms",
        "Bell peppers",
        "Onions",
        "Black olives",
        "Tomatoes",
        "Mozzarella cheese",
        "Tomato sauce"
      ],
      price: 14.99,
      size: {
        small: 11.99
      },
      vegetarian: true
    },
    {
      name: "Chicken Pesto",
      description: "A flavorful pizza topped with grilled chicken, pesto sauce, tomatoes, and mozzarella cheese.",
      ingredients: [
        "Grilled chicken",
        "Pesto sauce",
        "Tomatoes",
        "Mozzarella cheese",
        "Garlic",
        "Parmesan cheese",
        "Olive oil"
      ],
      price: 15.99,
      size: {
        small: 12.99
      },
      vegetarian: false
    },
    {
      name: "Seafood Delight",
      description: "An exquisite seafood pizza with shrimp, scallops, calamari, and a blend of cheeses.",
      ingredients: [
        "Shrimp",
        "Scallops",
        "Calamari",
        "Mozzarella cheese",
        "Parmesan cheese",
        "Tomato sauce",
        "Olive oil"
      ],
      price: 18.99,
      size: {
        small: 15.99
      },
      vegetarian: false
    },
    {
      name: "Italian",
      description: "Authentic Italian pizza topped with tomatoes, fresh mozzarella cheese, and basil leaves.",
      ingredients: [
        "Tomatoes",
        "Fresh mozzarella cheese",
        "Fresh basil",
        "Olive oil",
        "Salt",
        "Black pepper"
      ],
      price: 13.99,
      size: {
        small: 10.99,
        medium: 13.99,
        large: 16.99
      },
      vegetarian: true
    }
  ];