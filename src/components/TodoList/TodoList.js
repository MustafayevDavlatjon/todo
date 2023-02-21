import React from "react";
import { Button } from "react-bootstrap";
import s from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

function TodoList({ todo, setTodo }) {
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          <div className={!item.status ? s.close : ""}>{item.title}</div>
          <div>
            <Button onClick={() => deleteTodo(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button onClick={() => statusTodo(item.id)} className={s.btn}>
              {item.status ? (
                <FontAwesomeIcon icon={faLock} />
              ) : (
                <FontAwesomeIcon icon={faLockOpen} />
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
