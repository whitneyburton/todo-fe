import React from 'react';

export const TodoCard = ({ todo, todoItem, updateItems }) => {
  const toggleComplete = (todoId, bool, todoItem) => {
    updateItems(todoId, bool, todoItem);
  };

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
    </div>
  )
};
