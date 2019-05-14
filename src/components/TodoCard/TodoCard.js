import React from 'react';

export const TodoCard = ({ todo, todoItem, updateItem }) => {
  const toggleComplete = (todoId, itemId, bool) => {
    updateItem(todoId, itemId, bool);
  };

  return todoItem ? (
    <div className='TodoCard'>
      <h1 className='todo-title'>{todo.title}</h1>
      <div className='item-container'>
      <button className={todoItem.done ? 'checked-icon' : 'unchecked-icon'} />
      <p
        className={todoItem.done ? 'item-complete' : 'item-incomplete'}
        onClick={() => toggleComplete(todo.id, todoItem.id, todoItem.done)}>
        {todoItem.name}
      </p>
      </div>
    </div>
  ) : (
    <div className='TodoCard'>
      <h1 className='todo-title'>{todo.title}</h1>
    </div>
  );
};