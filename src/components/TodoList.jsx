import React, {useContext} from "react";
import TodoItem from "./TodoItem.jsx";
import { ListGroup } from "react-bootstrap";
import { mainData } from "../context/Context"; 

const TodoList = () => {
  const {todoArray} = useContext(mainData);
  return (
    <div className="todo-list">
      <ListGroup size="lg">
        {
          todoArray.map((item) => (
            <TodoItem name={item.name} key={item.id} id={item.id}/>
          ))
        }
        {
          todoArray.length === 0 ? <div style={{color: "white", fontSize: "24px"}}>Add Note</div> : null
        }
      </ListGroup>
    </div>
  )
};

export default TodoList;