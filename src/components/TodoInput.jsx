import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/taskSlice';
import '../styles/TodoInput.css';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTask({ text }));
      setText('');
    }
  };

  return (
    <section className='TodoInput'>
      <label className='TodoInput-label'>Añade una tarea</label>
      <input
        className='TodoInput-input'
        value={text}
        onChange={handleInputChange}
        placeholder='Escribe y presiona enter'
        onKeyDown={handleKeyDown}
      />
    </section>
  );
};
