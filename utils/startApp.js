import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getFoodCards } from '../api/foodsData';
import { showFood } from '../pages/food';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents(user);
  domEvents(user);
  formEvents(user);

  getFoodCards(user).then((food) => showFood(food));
};

export default startApp;
