import { useState, useEffect  } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  // Object product

  const product = {

    id: 0,
    name: '',
    brand: ''

  }

  // UseState
  const [btnRegister, setBtnRegister] = useState(true);
  const [products, setProducts] = useState([])
  const [objProduct, setObjProduct] = useState(product)

  // UseEffect

  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(data => data.json())
    .then(data_inverted => setProducts(data_inverted))
  
  }, [])

  // Return
  return (
    <div>
      <p>{JSON.stringify(objProduct)}</p>
      <Form button={btnRegister} />
      <Table product={products} />
    </div>
  );
}

export default App;
