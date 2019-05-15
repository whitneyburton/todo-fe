import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../../thunks/postTodo';
import { postItem } from '../../thunks/postItem';
import { isNullOrUndefined } from 'util';

export const TodoForm = ({ postTodo, postItem }) => {
  const [title, editTitle] = useState('');
  const [item, editItem] = useState('');

  const submitTodo = async () => {
    const newTodo = await postTodo(title, 2);
    const { id } = newTodo;
    postItem(item, false, id)
    clearTodo();
  }

  const clearTodo = () => {
    editTitle('')
    editItem('')
  }

  return (
    <div className='TodoForm'>
      <label for='title-input'>To-do title</label>
      <input className='title-input' name='title-input' value={title} onClick={() => editTitle('')} onChange={e => editTitle(e.target.value)} />
      <label for='item-input'>To-do item</label>
      <input className='item-input' name='item-input' value={item} onClick={() => editItem('')} onChange={e => editItem(e.target.value)} />
      <button className='submit-button' disabled={title.trim() === '' || item.trim() === ''} onClick={() => submitTodo()}>Submit Todo</button>
      <button className='clear-button' onClick={() => clearTodo()}>Clear</button>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  postTodo: (todo, id) => dispatch(postTodo(todo, id)),
  postItem: (name, done, id) => dispatch(postItem(name, done, id))
});

export default connect(null, mapDispatchToProps)(TodoForm);
