import TodoList from "./component/TodoList";
import { Input, Button } from "antd";
const { Search } = Input;

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Search
        placeholder="Thêm việc cần làm..."
        allowClear
        enterButton="Thêm"
        size="large"
      />
      <TodoList />
    </>
  );
}

export default App;
