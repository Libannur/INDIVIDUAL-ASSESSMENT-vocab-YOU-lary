import { getVocabCards } from '../../api/foodsData';
import { showVocabCards } from '../../pages/vocab';

const search = (e, user) => {
  if (e.target.value === undefined) {
    getVocabCards(user).then((vocab) => showVocabCards(vocab));
  } else {
    const userInput = e.target.value.toLowerCase();
    getVocabCards(user).then((array) => {
      const filteredArray = array.filter((item) => item.title.toLowerCase().includes(userInput));
      showVocabCards(filteredArray);
    });
  }
};

export default search;
