import { useDispatch } from 'react-redux';
import { toggleTask } from '../slices/taskSlice';
import '../styles/TodoItem.css';

export const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(toggleTask({ id }));
  };

  const doneClass = done ? 'TodoItem--done' : '';
  return (
    <li className={`TodoItem ${doneClass}`} onClick={handleOnClick}>
      {text}
    </li>
  );
};
