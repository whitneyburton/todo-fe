import React from 'react';
import { connect } from 'react-redux';

export const TodoContainer = ({ todos, items }) => {
  const toggleComplete = (id, bool) => {
  }

  const allTodos = todos.map(todo => {
    const todoItem = items.find(item => item.todo_id === todo.id)
    return todoItem ? <div>
      <h1>{todo.title}</h1>
      <h3 onClick={() => toggleComplete(todoItem.id)} className={todoItem.done ? 'complete' : 'incomplete'}>{todoItem.name}</h3>
    </div> :
    <div>
      <h1>{todo.title}</h1>
    </div>
  })

  return (
    <div className='TodoContainer'>
      {allTodos}
    </div>
  )
}

export const mapStateToProps = state => ({
  todos: state.todos,
  items: state.items
})

export default connect(mapStateToProps)(TodoContainer)