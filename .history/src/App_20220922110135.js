import TodoList from "./component/TodoList";
import { Input, Button } from "antd";
import { useState } from "react";
import {v4} from 'uuid'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onchangeText = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setTodoList([...todoList, { id: v4(), name: textInput, isComplete: false }]);
  };
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input.Group
        style={{
          display: "flex",
        }}
      >
        <Input
          placeholder="Thêm việc cần làm..."
          value={textInput}
          onChange={onchangeText}
        />
        <Button isDisabled = {!textInput} type="primary" onClick={onAddBtnClick}>
          Thêm
        </Button>
      </Input.Group>
      <br />
      <TodoList />
    </>
  );
}

export default App;
