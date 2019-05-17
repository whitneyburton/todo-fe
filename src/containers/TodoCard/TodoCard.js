import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { updateItems } from '../../thunks/updateItems';
import { deleteTodo } from '../../thunks/deleteTodo';

export const TodoCard = ({
  todo,
  todoItem,
  updateItems,
  deleteTodo,
  items,
  userId
}) => {
  const toggleComplete = (todoId, bool) => {
    updateItems(todoId, bool, userId);
  };

  const deleteCard = (todoId, itemId, items) => {
    deleteTodo(todoId, itemId, items, userId);
  };

  const editCard = () => {};

  return (
    <div className='TodoCard'>
      <h1 className='todo-title'>{todo.title}</h1>
      <div
        className='item-container'
        onClick={() => toggleComplete(todo.id, todoItem.done)}
      >
        <ReactTooltip id='toggle-tip' effect='solid'>
          Toggle complete
        </ReactTooltip>
        <button data-tip data-for='toggle-tip' className={todoItem.done ? 'checked-icon' : 'unchecked-icon'} />
        <p className={todoItem.done ? 'item-complete' : 'item-incomplete'}>
          {todoItem.name}
        </p>
      </div>
      <div className='buttons-container'>
        <button
          data-tip
          data-for='edit-tip'
          className='edit-todo'
          onClick={() => editCard(todo.id, todoItem.id, items)}
        />
        <ReactTooltip id='edit-tip' effect='solid'>
          Edit
        </ReactTooltip>
        <button
          data-tip
          data-for='delete-tip'
          className='delete-todo'
          onClick={() => deleteCard(todo.id, todoItem.id, items)}
        />
        <ReactTooltip id='delete-tip' effect='solid'>
          Delete
        </ReactTooltip>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  items: state.items,
  userId: state.userId
});

export const mapDispatchToProps = dispatch => ({
  updateItems: (todoId, itemId, bool, userId) =>
    dispatch(updateItems(todoId, itemId, bool, userId)),
  deleteTodo: (todoId, itemId, items, userId) =>
    dispatch(deleteTodo(todoId, itemId, items, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard);
