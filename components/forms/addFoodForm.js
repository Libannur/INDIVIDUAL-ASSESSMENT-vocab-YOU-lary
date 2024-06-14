import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addFoodForm = (user, obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `update-food-card--${obj.firebaseKey}` : 'submit-food-card'}" class="mb-4">
      <div class="mb-3 form-group">
        <label for="food-word" class="form-text form-label">Food</label>
        <input type="text" class="form-control" id="title" value="${obj.title || ''}" placeholder="Food Type" required>
      </div>
      <div class="mb-3 form-group">
        <label for="definition" class="form-text  form-label">Definition</label>
        <textarea class="form-control" id="definition" style="height: 100px" placeholder="Definition of the food type">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-menu">
       <label for="category" class="category">Category</label>
        <select class="form-control" placeholder="Select Category" id="menu" name="vocabCategory" value="${obj.menu || ''}" required>
        <option value="">Select Menu</option>
          <option value="Breakfast" ${obj.menu === 'Breakfast' ? 'selected' : ''}>Breakfast</option>
          <option value="Dessert" ${obj.menu === 'Dessert' ? 'selected' : ''}>Dessert</option>
          <option value="Lunch" ${obj.menu === 'Lunch' ? 'selected' : ''}>lunch</option>
        </select>
      </div>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-top: 15px">Submit Menu</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addFoodForm;
