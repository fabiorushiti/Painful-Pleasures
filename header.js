document.addEventListener("DOMContentLoaded", function() {
    // Krijimi i linkut
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "styles.css"; 

    // Lidhja e linkut me dok
    document.head.appendChild(cssLink);

    // krijim header html dinamik
    const headerContainer = document.getElementById("header-container");
    const headerHtml = `
    <header>
    <div class="logo">
      <h1><a href="home.html">Painful Pleasures</a></h1>
    </div>
    <div class="actions">
      <a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>
      <a href="dashboard.html" class="login-icon"><i class="fas fa-user"></i></a>
    </div>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span class="burger"></span>
    </button>
    <nav class="nav-menu">
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="#">Artists</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
<div class="search">
  <div class="search-wrapper">
    <input type="text" placeholder="Search by name, category">
    <button><i class="fas fa-search"></i></button>
  </div>
</div>

    `;

    // vendoset si header
    headerContainer.innerHTML = headerHtml;
});


document.addEventListener("DOMContentLoaded", function() {

    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "styles.css";

    document.head.appendChild(cssLink);


    const footerContainer = document.getElementById("footer-container");
    const footerHtml = `
    <footer>
  <div class="footer-column">
    <p>The leading provider of quality jewelry, tattoo and piercing supplies.</p>
    <div class="helpful-links">
      <p class="toggle-links">HELPFUL LINKS <i class="fas fa-chevron-down"></i></p>
      <ul class="links-list">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        
      </ul>
    </div>
    <p>410-712-0145</p>
    <p>support@painfulpleasures.com</p>
  </div>
  <div class="footer-column">
    <p>SIGN UP TO OUR NEWSLETTER</p>
    <p>Shopping: Wholesale</p>
  </div>
  <div class="footer-column">
    <p>DISCOVER</p>
    <p>SUBMIT</p>
  </div>
  </div>
  <!-- Other footer columns -->
</footer>

  
        `;

    footerContainer.innerHTML = footerHtml;
});

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