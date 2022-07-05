import { useState } from 'react';
import '../styles/TodoInput.css';

export const TodoInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className='TodoInput'>
      <label className='TodoInput-label'>Añade una tarea</label>
      <input
        className='TodoInput-input'
        value={text}
        onChange={handleInputChange}
        placeholder='Escribe y presiona enter'
      />
    </section>
  );
};
