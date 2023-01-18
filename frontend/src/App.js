import { useState, useEffect  } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  // UseState
  const [btnRegister, setBtnRegister] = useState(true);
  const [products, setProducts] = useState([])

  // UseEffect

  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(data => data.json())
    .then(data_inverted => setProducts(data_inverted))
  
  }, [])

  // Return
  return (
    <div className="App">
      <Form button={btnRegister} />
      <Table product={products} />
    </div>
  );
}

export default App;
