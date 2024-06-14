import {
  deleteFoodCard, getSingleFood, getFoodCards
} from '../api/foodsData';
import { showFood } from '../pages/food';
import addFoodForm from '../components/forms/addFoodForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A FOOD CARD
    if (e.target.id.includes('delete-food')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteFoodCard(firebaseKey).then(() => {
          getFoodCards(user.uid).then(showFood);
        });
      }
    }

    // CLICK EVENT FOR EDITING/UPDATING A FOOD CARD
    if (e.target.id.includes('edit-food')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleFood(firebaseKey).then((vocabObject) => addFoodForm(user, vocabObject));
      getSingleFood(firebaseKey).then(addFoodForm(user));
    }

    // CLICK EVENT FOR SHOWING ALL CARDS
    if (e.target.id.includes('all-cards-btn')) {
      getFoodCards(user.uid).then((vocab) => showFood(vocab));
    }
  });
};

export default domEvents;
