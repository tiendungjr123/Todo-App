import TodoList from "./component/TodoList";
import { Input, Button } from "antd";
import { useState, useCallback } from "react";
import { v4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onchangeText = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);
      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  },[]);
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input.Group
        style={{
          display: "flex",
        }}
      >
        <Input
          autoFocus
          placeholder="Thêm việc cần làm..."
          value={textInput}
          onChange={onchangeText}
        />
        <Button disabled={!textInput} type="primary" onClick={onAddBtnClick}>
          Thêm
        </Button>
      </Input.Group>
      <br />
      <TodoList todoList={todoList} onCheckBtnClick = {onCheckBtnClick} />
    </>
  );
}

export default App;
