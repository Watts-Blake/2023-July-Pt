const listArray = ['Second', 'Third', 'Fourth'];

let ul = document.querySelector('ul');
listArray.forEach(listItem => {
  let newLI = document.createElement('li');
  newLI.innerHTML = `<span>${listItem}</span>`;
  newLI.setAttribute('class', listItem)
  ul.appendChild(newLI);
});
const thirdItem = document.querySelector('.Third');
// thirdItem.remove();
thirdItem.style.color = 'rgb(255,0,0)'
thirdItem.style.fontWeight = 'bold'

window.addEventListener("DOMContentLoaded", event => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
  let clicks = 0;
  button.addEventListener("click", event => {
    clicks += 1;
    count.innerHTML = clicks;
  });

  const submitTodo = document.querySelector('form button');
  const todoHeader = document.createElement('h2');
  todoHeader.innerText = 'Todo List'
  document.body.appendChild(todoHeader);
  
  let onClickFunc = e => {
    e.preventDefault();

    let input = document.querySelector('form input');
    let newTodo = document.createElement('div');
    newTodo.innerHTML = `<p>${input.value}</p>`
    document.body.append(newTodo);
    input.value = ''
  }

  submitTodo.addEventListener('click', onClickFunc);
  submitTodo.removeEventListener('click', onClickFunc);
});
