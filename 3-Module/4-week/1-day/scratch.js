// fetch('/puppies/3')
//   .then((res) => res.json(), (rej) => console.log(rej))
//   .then((data) => console.log(data))
//   .catch(e => console.log(e));

// CALLBACK HELL
// function getForecastForLocation(){
//   locationRequest({
//     success: spotRequest({
//       success: forecastRequest({
//         success: handleSuccess,
//         error: handleError
//       }),
//       error: handleError
//     }),
//     error: handleError
//   });
// }

// function getForecastForLocation() {
//   locationRequest()
//     .then(spotRequest)
//     .then(forecastRequest)
//     .then(handleSuccess)
//     .catch(handleError)
// }

// action : the primary function of a promise

// Promises Exist in 1 / 3 States
// Pending : it is neither fulfilled or rejected
// Fulfilled : it was successful
// Rejected : it was a failure

// Settled Promises have become Fulfilled or Rejected, and cannot change states
// A promise can only succeed or fail once -  it doesn't try again.
// Once a promise is settle and a callback of the same type is appended, it's immediately invoked

// const request = new Promise((res, rej) => {
//   let checking = false;
//   if (checking) {
//     // setTimeout(() => res(), 1000);
//     res();
//   } else {
//     // setTimeout(() => rej(), 1000);
//     // rej();
//     throw new Error('This Promise was Rejected');
//   }
// })
// console.log(request);

// request
//   .then(() => console.log('RESOLVED'))
//   .catch((e) => console.log(e.message));
// console.log('Hello World')

// let superPromise = Promise.all([...arrOfPromises])
// if all the promises in the Super Promise are Resolved, the super-promise is resolved
// if any of the promises in the Super Promise are Rejected, the super-promise is rejected

function walkTheDog() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('happy dog');
    }, 1000);
  })
}
async function doChores() {
  console.log('before walking the dog');
  /*
  console.log(walkTheDog());
  let dogWalked = walkTheDog()
    .then(res => {
      console.log(res);
      console.log('after walking the dog');
      console.log('done');
    })
    .then((res) => console.log(res))
    .then(() => console.log('after walking the dog'))
    .then(() => console.log('done'))
  */
  // console.log(await walkTheDog());
  let dogWalked = await walkTheDog();
  console.log(dogWalked);
  console.log('after walking the dog')
  console.log('done');
}

doChores();