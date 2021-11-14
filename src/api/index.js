import * as responseData from './mockData.js';

export function callApi(endpoint) {
  const response = responseData[endpoint];
  const isResolved = response && Math.random() > 0.2;

  const responseDelay = Math.floor(Math.random() * 1500);

  return new Promise((resolve, reject) => {
    setTimeout(() => isResolved ? resolve(response) : reject(Error('Failed to load')), responseDelay);
  });
}
