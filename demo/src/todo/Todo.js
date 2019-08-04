import React, { useReducer } from 'react'

import todoReducer, { addTodo, toggleTodo } from './Todo.reducer'

const initialTodos =  [{
  title: 'Steal fat',
  complete: true
}, {
  title: 'Make soap',
  complete: false
}]

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const title = e.target.querySelector('[name="title"]').value
    dispatch(addTodo(title))
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>
            <label>
              {todo.title}
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => dispatch(toggleTodo(index))}
              />
            </label>
          </li>
        )}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter new todo title" />

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Todo
