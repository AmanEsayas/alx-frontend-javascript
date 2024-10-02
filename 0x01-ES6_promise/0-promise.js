// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(); // The promise is fulfilled immediately
  });
}
