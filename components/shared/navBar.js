import renderToDOM from '../../utils/renderToDom';
import logo from '../../public/images/logo.jpg';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark  mb-5">
    <div class="container-fluid">
        <a id="navbar-brand">
           <img id="vocab-you-lary-logo" width="160" height="34">
       </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-cards-btn">
                All Food <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="breakfast-btn">Breakfast</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="lunch-btn">Lunch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="dessert-btn">Dessert</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-entry">Create Entries</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
  document.querySelector('#vocab-you-lary-logo').src = logo;
};

export default navBar;
