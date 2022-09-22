import TodoList from "./component/TodoList";
import { Input, Button } from "antd";
const { Search } = Input;

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Search
        placeholder="input search text"
        
        enterButton="Search"
        size="large"
      />
      <TodoList />
    </>
  );
}

export default App;
