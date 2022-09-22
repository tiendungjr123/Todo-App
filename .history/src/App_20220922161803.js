import TodoList from "./component/TodoList";
import { Input, Button } from "antd";
import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storageTodolist = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storageTodolist) {
      setTodoList(JSON.parse(storageTodolist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

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
  }, []);

  const onDeleteBtnClick = useCallback((id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

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
      <TodoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
        onDeleteBtnClick={onDeleteBtnClick}
      />
    </>
  );
}

export default App;
