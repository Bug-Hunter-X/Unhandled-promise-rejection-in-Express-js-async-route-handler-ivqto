# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Improper error handling in such scenarios can lead to application crashes or unexpected behavior.

## The Bug
The `bug.js` file contains an Express.js server with an asynchronous route handler.  If the asynchronous operation (`someAsyncOperation`) throws an error, the error is not caught, resulting in an unhandled promise rejection.

## The Solution
The `bugSolution.js` file provides a solution by using `try...catch` blocks to handle potential errors within the asynchronous operation and using appropriate middleware to handle errors globally. This ensures that the server remains operational even if errors occur during asynchronous operations.

## How to reproduce the bug
1. Clone the repo.
2. Navigate to the directory containing the `bug.js` file.
3. Run the command `node bug.js`.
4. Modify the `someAsyncOperation` function in `bug.js` to intentionally throw an error (e.g., throw new Error('Something went wrong!'))
5. Observe the unhandled promise rejection error in the console.