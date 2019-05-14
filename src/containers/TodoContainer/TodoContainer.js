import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../../thunks/updateItem';
import { TodoCard } from '../../components/TodoCard/TodoCard';

export const TodoContainer = ({ todos, items, updateItem }) => {
  let allTodos = [];
  todos.forEach(todo => {
    items.forEach(item => {
      if (item.todo_id === todo.id) {
        allTodos.push(<TodoCard key={todo.id} todo={todo} todoItem={item} updateItem={updateItem} />);
      }
    });
  });

  return <div className='TodoContainer'>{allTodos}</div>;
};

export const mapStateToProps = state => ({
  todos: state.todos,
  items: state.items
});

export const mapDispatchToProps = dispatch => ({
  updateItem: (todoId, itemId, bool) => dispatch(updateItem(todoId, itemId, bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
