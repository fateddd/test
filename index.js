/*
{
  name: 'asdsa',
  date: '12.21.3233',
  task: 'done',
  edited: false
}
*/
const local = localStorage.getItem('todos')

let todos = local ? JSON.parse(local) : []
renderList()

function myFunc() {
  const name = document.getElementById('name').value
  const date = document.getElementById('date').value

  todos = [...todos, {name, date, task: false, edited: false}]
  // console.log(todos)
  localStorage.setItem('todos', JSON.stringify(todos))
  renderList()
  // todos.push({name: name})
}

function renderList() {
  const list = document.getElementById('list')
  list.innerHTML = ''
  // for (let i = 0; i < todos.length; i++) { let todo = todos[i] }
  for (todo of todos) {
    const listItem = document.createElement('p')
    const index = todos.indexOf(todo)
    listItem.onclick = () => changeStatus(index)
    listItem.innerHTML = `${todo.name} - ${todo.date} - ${todo.task} ${todo.edited ? '*' : ''}`
    list.append(listItem)
  }
}

function changeStatus(id) {
  todos = todos.map( (todo, index) => {
    if (index !== id) {
      return todo
    } else {
      return {...todo, task: !todo.task, edited: true}
    }
  } )

  // todos = todos.map( (t,i) => (
  //   i === id
  //     ? t
  //     : {...t, task : !t.task}
  // ))
  renderList()
}


function clearStorage() {
  localStorage.removeItem('todos');
  todos = [];
  renderList();

}

// todo.name + ' - ' + todo.date  + ' - ' todo.task
// `${todo.name} - ${todo.date} - ${todo.task}`