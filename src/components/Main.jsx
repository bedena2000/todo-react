import React, { useContext, useState } from "react";
import {InputGroup, Button, FormControl} from "react-bootstrap";
import TodoList from "./TodoList";
import { mainData } from "../context/Context";


const Main = () => {
  const [warning, setWarning] = useState(false);
  const [text, setText] = useState("");
  const {addTodo, isAllow} = useContext(mainData);
  const submitText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="main">
      <div className="container main-wrapper">
        <div className="todo-input">
            {
              warning ? <h2 style={{color: "red", fontSize: "14px"}}>enter some text!!!</h2> : null
            }
          <InputGroup size="lg" className="mb-3">
            <FormControl disabled={isAllow ? false : true} value={text} onChange={submitText} placeholder="Add todo"/>
            <Button disabled={isAllow ? false : true} onClick={() => {
              if(text === "") {
                setWarning(true);
              } else {
                addTodo(text);
                setWarning(false);
              }
            }}>
              Submit
            </Button>
          </InputGroup>
        </div>
        <TodoList />
      </div>
    </div>
  )
};

export default Main;