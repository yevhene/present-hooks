const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (title) => ({ type: ADD_TODO, title })
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index })

export default function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { title: action.title, complete: false }]
    case TOGGLE_TODO:
      return [
        ...state.slice(0, action.index),
        toggle(state[action.index]),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function toggle(todo) {
  return { ...todo, complete: !todo.complete }
}
