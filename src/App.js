import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './styles/main.css';

function App() {
  return (
    <div className='App'>
      <h1>Mi lista</h1>
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
