import {createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

export let mainData = createContext();

const TodoInfo = ({children}) => {
  const [todoArray, setTodoArray] = useState([]);
  const [isAllow, setIsAllow] = useState(true);
  const [searched, setSearched] = useState([]);
  const [previusTodo, setPreviusTodo] = useState([]);
  const [resetArray, setResetArray] = useState(false);
  useEffect(() => {
    setTodoArray([...previusTodo]);
  }, [resetArray]);
  useEffect(() => {
    setPreviusTodo([...todoArray]);
  }, [searched]);
  const addTodo = (name) => {
    const newItem = {
      name: name,
      id: uuidv4()
    };
    setTodoArray([
      ...todoArray,
      newItem
    ])
  };
  const deleteTodo = (elementId) => {
    const newArray = todoArray.filter((item) => item.id !== elementId);
    console.log(elementId);
    setTodoArray(newArray);
  };
  return (
    <mainData.Provider value={{
      todoArray,
      addTodo,
      deleteTodo,
      isAllow,
      setIsAllow,
    }}>
      {children}
    </mainData.Provider>
  )
};

export default TodoInfo