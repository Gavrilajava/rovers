Hello. This is my submission for DealerOn coding test. I chose Mars Rovers problem and implement it in the Typescript. Although it was pointed out in the task that it was not necessary to use third-party libraries, I did use React because I wanted to try Redux with Typescript first and to leave a good impression on the user. However, all logic is separated and you can see it in the src/logic folder. You can enter commands one by one or all together. I added some unspecified answers as reactions to errors and subtext as I thought it was important (and also for the convenience of testing). By the way, the tests are located in the src/tests folder. Check the test section of this readme if test throws an error.

## Requirements and Installation

You should have node package manager installed. Yarn shoul work too, but not tested.
In the project directory, you run:

### `npm install`

## Runs the app in the development mode.

## Launch

In the project directory, you run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Test

### `npm test`

Launches the test runner. 
if you see the error message:

### SyntaxError: Cannot use import statement outside a module

Just change in your tsconfig.json:

### module": "esnext",

to:

### "module": "commonjs",

## Build

### `npm build`

