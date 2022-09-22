import TodoList from "./component/TodoList";
import { Input, Button } from "antd";

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input.Group
        style={{
          display: "flex",
        }}
      >
        <Input placeholder="Thêm việc cần làm..." />
        <Button disabled='false' type="primary">Submit</Button>
      </Input.Group>
      <TodoList />
    </>
  );
}

export default App;
