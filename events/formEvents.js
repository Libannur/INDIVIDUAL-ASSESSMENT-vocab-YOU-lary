import { createFood, getFoodCards, updateFood } from '../api/foodsData';
import { showFood } from '../pages/food';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY
    if (e.target.id.includes('submit-food-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        menu: document.querySelector('#menu').value,
        uid: user.uid,
        time: new Date().toLocaleString(),
      };
      createFood(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateFood(patchPayload).then(() => {
          getFoodCards().then(showFood);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING A VOCABULARY
    if (e.target.id.includes('update-food-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        menu: document.querySelector('#menu').value,
        firebaseKey,
      };
      updateFood(payload).then(() => {
        getFoodCards().then(showFood);
      });
    }
  });
};

export default formEvents;
