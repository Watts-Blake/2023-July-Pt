// promise : a tool for simplifying async callbacks

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

// function getForecastForLocation(){
//   locationRequest()
//     .then(spotRequest)
//     .then(forecastRequest)
//     .then(handleSuccess)
//     .catch(handleError)
// }

// action : primary function of a promise

// promises can be in 1 / 3 states:
// pending : promise is not fulfilled or rejected
// fulfilled : the action was successful
// rejected : the action failed

// once a promise has settled it cannot change states
// a promise can only succeed or fail once - no do overs
// If a promise has already settled and a callback is added that matches the promises state, it is called immediately

// const request = new Promise((res, rej) => {
//   let checking = false;
//   if (checking) {
//     res('RESOLVED')
//   } else {
//     rej('REJECTED')
//   }
// })

// console.log(request);
// request
//.then(onFulfilledFunction, onRejectedFunction)
// .then((data) => console.log('Res: ', data), data => console.log('Rej: ', data))
// .catch(e => console.log(e));

// Promise.all(arrayOfPromises)
// if all promises inside the super-promise are fulfilled, the SP is fulfilled
// if any of the promises inside the SP are rejected, the SP is rejected

function walkTheDog() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('happy dog');
    }, 1000)
  })
}

// walkTheDog()
//   .then(res => console.log(res));
async function doChores() {
  console.log('before walking the dog');
  let res = await walkTheDog()
  console.log(res);
  // walkTheDog()
    // .then(res => console.log(res))
    // .then(() => console.log('after walking the dog'))
    // .then(() => console.log('done'))
  console.log('after walking the dog');
  console.log('done');
}

doChores();