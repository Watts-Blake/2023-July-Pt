// Browser Object Model
// Document Object Model
window.onload = () => {
  // let div = document.querySelectorAll('li')[0];
  // div.innerText = "Modified";
  let div = document.querySelector('div');
  let main = document.createElement('main');
  let h1 = document.createElement('h1');
  h1.innerText = 'This is our Page!'
  h1.setAttribute('id', 'main-header');
  h1.setAttribute('class', 'big-text');
  main.appendChild(h1);
  document.body.appendChild(main);

  let header = document.getElementById('main-header');
  console.log(header);
  let header2 = document.getElementsByClassName('big-text');
  console.log(header2);
}