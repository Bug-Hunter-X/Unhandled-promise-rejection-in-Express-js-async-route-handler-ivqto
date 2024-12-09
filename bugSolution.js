const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello!');
    })
    .catch(error => {
      //This will trigger the error handling middleware
      next(error);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  //await somePromiseThatMightReject(); 
  // Uncomment the above to test error handling
}
