import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../Redux/Products/action';

const EditProduct = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const {id} = useParams();
  const products = useSelector(store=> store.productReducer.products);
  // console.log(products)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const {price, name} = products.find((e)=> e.id === +id);
    setName(name);
    setPrice(price);
    // console.log(product)
    // setData(product)
  },[])
  const handleEdit = ()=>{
   
    const newObj = {
      name: name,
      price: Number(price)
    }
    // console.log(newObj)
    dispatch(editProduct(id, newObj));
    
    navigate("/")
    // setTimeout(() => {
    //   window.location.reload();
    // }, 0);

  }
  return (
    <div>
      <h3>{id}</h3>
      <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)} placeholder='name'/>
      <input type="number" name="" id="" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder='price'/>
      <input type="submit" value="Submit" onClick={handleEdit}/>
    </div>
  )
}

export default EditProduct