import React, { useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import s from "./AddTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Input Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo} className={s.btn}>
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </Col>
    </Row>
  );
}
export default AddTodo;
