import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';
import '../styles/TodoList.css';

export const TodoList = () => {
  const taskList = useSelector((state) => state.tasks);

  return (
    <section className='TodoList'>
      {taskList.length > 0 ? (
        <ul>
          {taskList.map(({ id, text, done }) => (
            <TodoItem key={id} id={id} text={text} done={done} />
          ))}
        </ul>
      ) : (
        <p>Empieza a añadir tareas ✨ </p>
      )}
    </section>
  );
};
