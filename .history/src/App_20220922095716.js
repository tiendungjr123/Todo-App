import TodoList from "./component/TodoList";
import { Input, Button } from "antd";

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input.Group>
        <Input
          defaultValue="https://ant.design"
        />
        <Button type="primary">Submit</Button>
      </Input.Group>
      <TodoList />
    </>
  );
}

export default App;
