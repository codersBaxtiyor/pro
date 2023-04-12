import { useState, useEffect } from "react";
import { db } from "../auth/firebase/firebase";
import { set, ref, onValue, remove } from "firebase/database";
const Auth = () => {
  // write
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const uuid = Date.now();
  const writeData = () => {
    set(ref(db, `/${uuid}`), {
      todo: todo,
      uuid: uuid,
    });
    setTodo("");
  };
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };
  // read

  useEffect(() => {
    setTodos([]);
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  // update
  const updateDate = () => {
    const uuid = Date.now();
    set(ref(db, `${uuid}`), {
      todo,
      uuid,
    });
    setTodos("");
  };
  // delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={todo}
        onChange={handleTodoChange}
      />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={writeData}>send</button>
      {todos.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.todo}</h1>
            <button onClick={() => handleDelete(todo)}> delete</button>
            <button onClick={() => updateDate(todo)}> update</button>
          </div>
        );
      })}
    </div>
  );
};

export default Auth;
