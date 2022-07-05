import '../styles/TodoItem.css';

export const TodoItem = ({ text, done }) => {
  const doneClass = done ? 'TodoItem--done' : '';
  return <li className={`TodoItem ${doneClass}`}>{text}</li>;
};
