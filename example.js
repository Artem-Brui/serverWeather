
// console.log(process.env.NODE_ENV);
// console.log(process.env.API_URL);
// console.log(process.env.API_KEY);
// console.clear()

const url = process.env.API_URL;
const key = process.env.API_KEY;

if (process.env.NODE_ENV === 'development') {
  console.log('Running in test mode');
}

(async () => {
  const response = await fetch(`${process.env.API_URL}${process.env.API_KEY}`);
  const result = await response.json();
  console.log(result);
})();