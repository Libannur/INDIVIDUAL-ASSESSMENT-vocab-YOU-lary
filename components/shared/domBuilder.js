import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id ="navigation"></div>
  <div id ="main-container">
    <div id="search-and-filter-container">
    <div id="food-cards-container"></div>
    <div id="form-container"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
