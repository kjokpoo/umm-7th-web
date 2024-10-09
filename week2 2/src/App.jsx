import { useState } from "react";
import "./App.css";
import TodoButton from "./components/todoButton";
import DeleteButton from "./components/deleteButton";
import UpdateButton from "./components/updateButton";
import InputButton from "./components/inputButton";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "희연, 혜연, 천민" },
  ]);

  const [text, setText] = useState("");

  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputButton
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TodoButton onClick={addTodo} />
      </form>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex", gap: "20px" }}>
            {editingId !== todo.id ? (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <DeleteButton onClick={deleteTodo}/>
            <UpdateButton onClick={updateTodo}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
