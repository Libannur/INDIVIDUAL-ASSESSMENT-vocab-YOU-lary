import {
  getDessert, getBreakfast, getFoodCards,
  getLunch
} from '../api/foodsData';
import addVocabForm from '../components/forms/addFoodForm';
import { showFood } from '../pages/food';
import { signOut } from '../utils/auth';

// NAVIGATION EVENTS
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL FOOD CARDS
  document.querySelector('#all-cards-btn').addEventListener('click', () => {
    getFoodCards(user).then(showFood);
  });

  // CLICK EVENT FOR SHOG FORM FOR ADDING A FOOD CARD
  document.querySelector('#create-entry').addEventListener('click', () => {
    addVocabForm(user.uid);
  });
  // Filter
  document.querySelector('#breakfast-btn').addEventListener('click', () => {
    getBreakfast().then(showFood);
  });

  document.querySelector('#dessert-btn').addEventListener('click', () => {
    getDessert().then(showFood);
  });

  document.querySelector('#lunch-btn').addEventListener('click', () => {
    getLunch().then(showFood);
  });
};

export default navigationEvents;
