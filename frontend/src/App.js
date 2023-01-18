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
      if(data_inverted.message !== undefined){
        alert(data_inverted.message)
      }else{
        setProducts([...products, data_inverted])
        alert('Produto Registado com suecsso!')
        emptyForm();
      }
    })
  }

  // empty form

  const emptyForm = () => {
    setObjProduct(product)
  }

  // Return
  return (
    <div>
         <Form button={btnRegister} eventKeyboard={digit} register={register} obj={objProduct} />
         <Table product={products} />
    </div>
  );
}

export default App;
