import TodoList from "./component/TodoList";
import { Input, Button } from "antd";

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input.Group
        style={{
          display: "flex",
          padding:"2px 4px 2px"
        }}
      >
        <Input placeholder="Thêm việc cần làm..." />
        <Button disabled='false' type="primary">Thêm</Button>
      </Input.Group>
      <br/>
      <TodoList />
    </>
  );
}

export default App;
