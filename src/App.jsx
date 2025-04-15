import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data/data';

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [newTodo, setNewTodo] = useState('');
  const [nextId, setNextId] = useState(1); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      return;
    }

    const newTodoItem = {
      id: nextId, 
      body: newTodo,
    };

    setTodos([...todos, newTodoItem]); 
    setNextId(nextId + 1);
    setNewTodo('');
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="todo" 
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />
    </div>
  );
}

export default App;
