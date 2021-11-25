import { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const addTodoHandler = (e) => {
    e.preventDefault();
    // if (todo.trim().length > 0) return;
    setTodos((prev) => {
      return [...prev, { id: Math.random(), todo: todo }];
    });
    setTodo('');
  };
  const removeTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div className='App'>
      <header>
        <h2>To Do</h2>
        <form onSubmit={addTodoHandler}>
          <input
            type='text'
            id='todo'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button>제출</button>
        </form>
      </header>
      <section className='todos'>
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li className='todo-item' key={todo.id}>
              <p>{todo.todo}</p>
              <span
                onClick={() => {
                  removeTodoHandler(todo.id);
                }}
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
