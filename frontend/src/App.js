import { useState  } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  const [btnRegister, setBtnRegister] = useState(true);

  return (
    <div className="App">
      <Form button={btnRegister} />
      <Table />
    </div>
  );
}

export default App;
