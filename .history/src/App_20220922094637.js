import TodoList from "./component/TodoList";
import { Input } from 'antd';
function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Input type="" placeholder='Thêm việc cần làm...'/>
      <TodoList/>
    </>
  );
}

export default App;
