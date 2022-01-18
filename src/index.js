document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target['new-task-description'].value)
  })
});

function addToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = 'X'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#create-task-form').appendChild(p)
}

function deleteToDo(e){
  e.target.parentNode.remove()
}

// const taskForm = document.getElementById('create-task-form')
// const input = document.getElementById('new-task-description')
// const list = document.getElementById('list')

