import { useState, useEffect  } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  // UseState
  const [btnRegister, setBtnRegister] = useState(true);
  const [product, setProduct] = useState([])

  // UseEffect

  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(data => data.json())
    .then(data_inverted => setProduct(data_inverted))
  
  }, [])

  // Return
  return (
    <div className="App">
      <p>{JSON.stringify(product)}</p>
      <Form button={btnRegister} />
      <Table />
    </div>
  );
}

export default App;
