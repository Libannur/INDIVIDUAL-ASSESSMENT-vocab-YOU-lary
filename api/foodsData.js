import client from '../utils/client';

const endpoint = client.databaseURL;

// GET FOOD CARDS
const getFoodCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}//foods.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE FOOD CARD
const deleteFoodCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE FOOD CARD
const getSingleFood = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE FOOD CARD
const createFood = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE FOOD CARD
const updateFood = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// FILTER FOOD CARDS BY LANGUAGE
const getDessert = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const dessert = Object.values(data).filter((obj) => obj.menu === 'Dessert');
      resolve(dessert);
    })
    .catch(reject);
});

const getLunch = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lunch = Object.values(data).filter((obj) => obj.menu === 'Lunch');
      resolve(lunch);
    })
    .catch(reject);
});

const getBreakfast = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/foods.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const breakfast = Object.values(data).filter((obj) => obj.menu === 'Breakfast');
      resolve(breakfast);
    })
    .catch(reject);
});

export {
  getFoodCards, deleteFoodCard, createFood, updateFood, getLunch, getDessert, getBreakfast, getSingleFood
};
