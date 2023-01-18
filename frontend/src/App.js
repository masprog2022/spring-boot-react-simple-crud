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

  // get data form

  const digit = (e) => {
    setObjProduct({...objProduct, [e.target.name]:e.target.value})
  }

  // register product

  const register = () => {

    fetch('http://localhost:8080/products', {
      method: 'post',
      body:JSON.stringify(objProduct),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }

    })
    .then(data => data.json())
    .then(data_inverted => {
      console.log(data_inverted)
    })
  }

  // Return
  return (
    <div>
         <Form button={btnRegister} eventKeyboard={digit} register={register} />
         <Table product={products} />
    </div>
  );
}

export default App;
