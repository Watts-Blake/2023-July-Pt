# M2Wk2D3 Context TDD

## [Learning Boost](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/learning-boost---wednesday) 5 Min

<br/>

## Testing Pyramid
- Unit Tests: The smallest unit of testing - used to test the smallest pieces of your application in isolation to ensure each piece works before you attempt to put those pieces together. Each unit test should focus on testing one thing. These are generally the fastest tests to write and run.
- Integration Tests: Once you have your unit tests in place you know each piece works in isolation - but what about when those pieces interact with each other? Integration tests are the next level up, they will test the interactions between two pieces of your application. Integration tests will ensure the units you've written work coherently together.
- End-to-End (E2E) Tests: End-to-end tests are the highest level of testing - these will test the whole of your application. End-to-end tests are the closest automated tests come to testing the actual user experience of your application. These are generally the slowest tests to write and run.


### TDD (Test-Driven-Development)
As you know, the first step to solving any problem is to understand the problem. Most of the problems you have seen describe the problem requirements with a short, written description and a set of test specs. The descriptions tell you what your code should do while the tests let you know when your code is working as intended.


#### TDD Phases
- Red: Write the tests and watch them fail (a failing test is red). It's important to ensure the tests initially fail so that you don't have false positives.
- Green: Write the minimum amount of code to ensure the tests pass (a passing test will be green).
- Refactor: Refactor the code you just wrote. Your job is not over when the tests pass! One of the most important things you do as a software developer is to ensure the code you write is easy to maintain and read.

### Unit Testing w/ Mocha and Chai
[Mocha Docs](https://mochajs.org/)
- Mocha is a node.js test framework that allows us to build test files
[Chai Docs](https://www.chaijs.com/api/bdd/)
- Chai is an Assertion library that provides us with semantic syntax to write our test cases

### Setting up your test environment

```
npm init
npm install mocha
npm install chai
```

### Setting up the test files
```
// import the expect function from chai
const { expect } = require('chai');

// import you unit that you are testing
const User = require("../class/user.js");


// use the describe function, you can pass in an optional description as an argument, and then another function that will be you actual test case
describe ('User class', function () {

// use the key word to create individual tests for this test
  it('should create successfully', function () {

    let user;

    // use any chai hooks that you would like in order to re use or reset code before each test
    beforeEach(() => {
    user = new User("john_doe");
  });

    // use chai assertion syntax to test your code
    expect(user).to.exist;

  });

});

```

<br/>

## [Testing Pyramid Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/testing-pyramid-quiz) 10 - mins

## [TDD Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/tdd-quiz) - 10 mins

## [Mocha and Chai Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/mocha-and-chai-quiz) - 10 mins


<br/>

## Paired Practice [Units Test w/ Mocha and Chai](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/tdd-style-project--phase-1-2) - Until EOD

<br/>

# [Formative Quiz](https://open.appacademy.io/learn/js-py---pt-jul-2023-online/week-8---context-and-tdd/formative-quiz---wednesday--repeat-) - 10 minutes


# EOD
