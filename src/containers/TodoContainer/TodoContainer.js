import React from 'react';
import { connect } from 'react-redux';
import { TodoCard } from '../../components/TodoCard/TodoCard';

export const TodoContainer = ({ todos, items }) => {
  const allTodos = todos.map(todo => {
    const todoItem = items.find(item => item.todo_id === todo.id);
    return <TodoCard key={todo.id} todo={todo} todoItem={todoItem} />;
  });

  return <div className='TodoContainer'>{allTodos}</div>;
};

export const mapStateToProps = state => ({
  todos: state.todos,
  items: state.items
});

export default connect(mapStateToProps)(TodoContainer);
