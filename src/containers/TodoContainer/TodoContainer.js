import React from 'react';
import { connect } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';

export const TodoContainer = ({ todos, items }) => {
  let allTodos = [];
  todos.forEach(todo => {
    items.forEach(item => {
      if (item.todo_id === todo.id) {
        allTodos.push(
          <TodoCard key={todo.id} todo={todo} todoItem={item} items={items} />
        );
      }
    });
  });

  return <div className='TodoContainer'>{allTodos.reverse()}</div>;
};

export const mapStateToProps = state => ({
  todos: state.todos,
  items: state.items
});

export default connect(mapStateToProps)(TodoContainer);
