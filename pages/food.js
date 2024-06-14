import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyFood = () => {
  const domString = 'No Food cards';
  renderToDom('#food-card-container', domString);
};

const showFood = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-text">${item.definition}</p>
        <p class="card-text"><strong>${item.menu}</strong></p>
        <i id="edit-food-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"> Edit</i>
        <i id="delete-food-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
      </div>
    </div>
    `;
  });
  renderToDom('#food-cards-container', domString);
};

export { emptyFood, showFood };
