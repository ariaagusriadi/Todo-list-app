import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // state
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // unutk supaya kursor lansung kedlam inputan atauu form
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // untuk mengubah isi atau value input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // untuk tombol atau menubah add dan update
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  // memanpilkan hasil output
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* pengkodisian jika props edit bernilai true atau di tekan akan mengembalikan update sedangkan jika value atau props bernilai false akan mengembalikan add*/}
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update a todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit"> Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button"> Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
