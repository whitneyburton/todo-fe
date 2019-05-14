import React from 'react';
import { connect } from 'react-redux';
import { updateItems } from '../../thunks/updateItems';
import { TodoCard } from '../../components/TodoCard/TodoCard';

export const TodoContainer = ({ todos, items, updateItems }) => {
  let allTodos = [];
  todos.forEach(todo => {
    items.forEach(item => {
      if (item.todo_id === todo.id) {
        allTodos.push(
          <TodoCard
            key={todo.id}
            todo={todo}
            todoItem={item}
            updateItems={updateItems}
          />
        );
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
  updateItems: (todoId, itemId, bool, todoItem) =>
    dispatch(updateItems(todoId, itemId, bool, todoItem)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
