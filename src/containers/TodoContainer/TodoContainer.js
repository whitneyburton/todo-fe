import React from 'react';
import { connect } from 'react-redux';
import { TodoCard } from '../../components/TodoCard/TodoCard';

export const TodoContainer = ({ todos, items }) => {
  const allTodos = todos.map(todo => {
    const todoItem = items.find(item => item.todo_id === todo.id)
    return todoItem ? <TodoCard todo={todo} todoItem={todoItem} /> :
    <div className='todo-card'>
      <h1 className='todo-title'>{todo.title}</h1>
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