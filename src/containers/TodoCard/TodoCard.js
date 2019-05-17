import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { updateItems } from '../../thunks/updateItems';
import { deleteTodo } from '../../thunks/deleteTodo';
import { editTodos } from '../../thunks/editTodos';

export const TodoCard = ({
  todo,
  todoItem,
  updateItems,
  deleteTodo,
  items,
  userId,
  editTodos
}) => {
  const [contentEditable, toggleEditable] = useState(false);
  const [title, editTitle] = useState(todo.title);
  const [item, editItem] = useState(todoItem.name);
  const date = new Date(todoItem.created_at).toString().slice(0, 15);

  const deleteCard = (todoId, itemId, items) => {
    deleteTodo(todoId, itemId, items, userId);
  };

  const editCard = () => {
    toggleEditable(!contentEditable);
    contentEditable && editTodos(title, item, userId, todo, todoItem);
  };

  const toggleComplete = (todoId, bool) => {
    updateItems(todoId, bool, userId);
  };

  return (
    <div className='TodoCard'>
      {!contentEditable ? (
        <h1 className='todo-title'>{title}</h1>
      ) : (
        <input
          className='edit-name-input'
          value={title}
          onChange={e => editTitle(e.target.value)}
        />
      )}
      <div
        className='item-container'
        onClick={() => toggleComplete(todo.id, todoItem.done)}
      >
        <ReactTooltip id='toggle-tip' effect='solid'>
          Toggle complete
        </ReactTooltip>
        <button
          data-tip
          data-for='toggle-tip'
          className={todoItem.done ? 'checked-icon' : 'unchecked-icon'}
        />
        {!contentEditable ? (
          <p className={todoItem.done ? 'item-complete' : 'item-incomplete'}>
            {item}
          </p>
        ) : (
          <input
            className='edit-name-input'
            value={item}
            onChange={e => editItem(e.target.value)}
          />
        )}
      </div>
      <div className='buttons-container'>
        <button
          disabled={true}
          data-tip
          data-for='edit-tip'
          className={contentEditable ? 'save-todo' : 'edit-todo'}
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
      <p className='todo-date'>Created: {date}</p>
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
    dispatch(deleteTodo(todoId, itemId, items, userId)),
  editTodos: (todoTitle, itemName, userId, todo, item) =>
    dispatch(editTodos(todoTitle, itemName, userId, todo, item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard);
