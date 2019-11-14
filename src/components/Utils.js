/**
 * This file contains the helper functions used in the App
 * sortByName and sortByNumber are both used in the MainPage.js file
 */

export const sortByName = property => {
  return function(a, b) {
    const first = a[property].toLowerCase();
    const second = b[property].toLowerCase();

    return first.localeCompare(second);
  };
};

export const sortByNumber = property => {
  return function(a, b) {
    return a[property] - b[property];
  };
};
