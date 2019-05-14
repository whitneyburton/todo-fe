import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../../thunks/postTodo';
import { postItem } from '../../thunks/postItem';

export const TodoForm = ({ postTodo, postItem }) => {
  const [title, editTitle] = useState('Todo title');
  const [item, editItem] = useState('Todo item');

  const submitTodo = async () => {
    const newTodo = await postTodo(title, 2);
    const { id } = newTodo;
    postItem(item, false, id)
  }

  const clearTodo = () => {
    editTitle('')
    editItem('')
  }

  return (
    <div className='TodoForm'>
      <input className='title-input' placeholder={title} value={title} onClick={() => editTitle('')} onChange={e => editTitle(e.target.value)} />
      <input className='item-input' placeholder={item} value={item} onClick={() => editItem('')} onChange={e => editItem(e.target.value)} />
      <button className='submit-button' onClick={() => submitTodo()}>Submit Todo</button>
      <button className='clear-button' onClick={() => clearTodo()}>Clear</button>
    </div>
  );
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
  postTodo: (todo, id) => dispatch(postTodo(todo, id)),
  postItem: (name, done, id) => dispatch(postItem(name, done, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
