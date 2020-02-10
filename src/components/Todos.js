import React from 'react';

const defaultTodos = [
  {text: 'do this', completed: false },
  {text: 'do this', completed: false },
  {text: 'do this', completed: true },
]

export default function Todos() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem('todos')) || defaultTodos
  )
  const [ text, setText ] = React.useState('')

  function addTodo() {
    if(text.length > 0) {
      setTodos([...todos, { text, completed: false }])
      setText('')
    }
  };

  function markTodo(item) {
    const newTodos = [...todos]
    newTodos[item].completed = true
    setTodos(newTodos)
  }

  function deleteTodo(item) {
    const newTodos = [...todos]
    newTodos.splice(item, 1)
    setTodos(newTodos)
  }

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ul className="todos">
      {todos.map(({ text, completed }, item) => (
        <li key={item} className={('todo', {done: completed })}>
          <span>{text}</span>

          {!completed && (
            <button className="mark" onClick={() => markTodo(item)}>
              &#10003;
            </button>
          )}
          <button className="delete" onClick={() => deleteTodo(item)}>
            &#x2716;
          </button>
        </li>
      ))}

      <li className="todo-input">
        <input
          type="text"
          placeholder="Type Your Shit Here"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={e => (e.key === 'Enter' ? addTodo() : {})} 
        />

        <button className={({ visible: text.length > 0 })} onClick={addTodo}>
          &#9166;
        </button>
      </li>
    </ul>
  )




}