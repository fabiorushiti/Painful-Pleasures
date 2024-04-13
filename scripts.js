document.addEventListener("DOMContentLoaded", function() {
    // butoni toggle nuk eshte funxional
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    // event listener
    navToggle.addEventListener('click', function() {
      // supozohet te behet visible por jo
      navMenu.classList.toggle('nav-menu--visible');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products-container");
  
    // 15 produkte
    for (let i = 1; i <= 15; i++) {
      const product = document.createElement("div");
      product.classList.add("product");
      
      const img = document.createElement("img");
      img.src = `https://via.placeholder.com/300x200.png?text=Product+${i}`;
      img.alt = `Product ${i}`;
      
      const title = document.createElement("h2");
      title.textContent = `Product ${i}`;
      
      const price = document.createElement("p");
      price.textContent = `$${Math.floor(Math.random() * 100) + 10}`;
  
      product.appendChild(img);
      product.appendChild(title);
      product.appendChild(price);
  
      productsContainer.appendChild(product);
    }
  });


  //arrow
  document.addEventListener("DOMContentLoaded", function() {
    const toggleLinks = document.querySelector('.toggle-links');
    const linksList = document.querySelector('.links-list');
  
    toggleLinks.addEventListener('click', function() {
      linksList.classList.toggle('show-links');
      const icon = toggleLinks.querySelector('i');
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    });
  });