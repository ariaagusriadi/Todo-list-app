import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

// state
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  // state
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // untuk submit atau update data
  const submitupdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  // pengkodisian jika edit.id ditekan maka akan menjalankan atau mengembalikan funcation submitupdate
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitupdate} />;
  }

  // menampilkan hasil output
  return todos.map((todo, index) => (
    <div
      className={Todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      {/* icon dari react icon */}
      <div className="icons">
        {/* icon remove dan dijalankan */}
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />

        {/* icon edit dan dijalankan */}
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
