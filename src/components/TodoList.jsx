import { TodoItem } from './TodoItem';
import '../styles/TodoList.css';

export const TodoList = () => {
  const mockArray = Array(3).fill({ id: 1, text: 'Item', done: false });
  return (
    <section className='TodoList'>
      <ul>
        {mockArray.map(({ id, text, done }) => (
          <TodoItem key={id} text={text} done={done} />
        ))}
      </ul>
    </section>
  );
};
