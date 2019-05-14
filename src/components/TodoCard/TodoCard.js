import React from 'react';

export const TodoCard = ({ todo, todoItem, updateItems, deleteTodo, items }) => {
  const toggleComplete = (todoId, bool, todoItem) => {
    updateItems(todoId, bool, todoItem);
  };

  const deleteCard = (todoId, itemId, items) => {
    deleteTodo(todoId, itemId, items);
  }

  return (
    <div className='TodoCard'>
      <h1 className='todo-title'>{todo.title}</h1>
      <div
        className='item-container'
        onClick={() => toggleComplete(todo.id, todoItem.done, todoItem)}
      >
        <button className={todoItem.done ? 'checked-icon' : 'unchecked-icon'} />
        <p className={todoItem.done ? 'item-complete' : 'item-incomplete'}>
          {todoItem.name}
        </p>
      </div>
      <button className='delete-todo' onClick={() => deleteCard(todo.id, todoItem.id, items)}/>
    </div>
  )
};
