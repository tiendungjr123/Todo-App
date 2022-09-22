import TodoList from "./component/TodoList";
import { Input, Button } from 'antd';
function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input type="" placeholder='Thêm việc cần làm...' enterButton="Thêm"/>
      <TodoList/>
    </>
  );
}

export default App;
