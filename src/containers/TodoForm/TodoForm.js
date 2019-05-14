import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../../thunks/postTodo';

export const TodoForm = ({ postTodo }) => {
  const [title, editTitle] = useState('To-do title');
  const [item, editItem] = useState('To-do item');

  const submitTodo = () => {
    postTodo(title, 2);
    // postItem(item, todoId)
  }

  return (
    <div className='TodoForm'>
      <input placeholder={title} onChange={e => editTitle(e.target.value)} />
      <input placeholder={item} onChange={e => editItem(e.target.value)} />
      <button onClick={() => submitTodo()}>Submit</button>
    </div>
  );
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
  postTodo: (todo, id) => dispatch(postTodo(todo, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
