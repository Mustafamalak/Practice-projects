import AppName from "./components/AppName";
import Add from "./components/AddTodo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";

function App() {
  return (
    <center classNameName="todoCont">
      {/* className and classNameName is same thing but classNameName is recomm. */}
      <AppName />
      <Add />
      <div className="itemCont">
        <Todo1 />
        <Todo2 />
      </div>
    </center>
  );
}
export default App;
