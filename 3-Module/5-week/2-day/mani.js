// BOM : Browser Object Model
// DOM : Document Object Model
window.onload = () => {
  let first = document.getElementById('first');
  first = document.getElementsByClassName('list')[0];
  first = document.getElementsByTagName('li')[0];
  first = document.querySelector('li');
  first.innerText = "MANIPULATED"

  let newSpan = document.createElement('span');
  newSpan.innerText = "I'm new!!!"
  newSpan.setAttribute('class', 'newSpan');
  newSpan.setAttribute('style', 'color:red');
  first.appendChild(newSpan)
  console.log(first);
}