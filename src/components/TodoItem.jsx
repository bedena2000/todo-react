import React, {useContext} from "react";
import { ListGroup } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { mainData } from "../context/Context";
import { motion } from "framer-motion";


const TodoItem = ({name, id}) => {
  const {deleteTodo} = useContext(mainData);
  return (
    <ListGroup.Item key={id} className="todo-item mb-3 d-flex justify-content-between align-items-center">
      {name}
      <AiFillDelete onClick={() => deleteTodo(id)} style={{ cursor: "pointer" }} className="delete-icon"/>
    </ListGroup.Item>
  )
};

export default TodoItem;