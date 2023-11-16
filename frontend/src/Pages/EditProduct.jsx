import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const {id} = useParams();
  const products = useSelector(store=> store.productReducer.products);
  // console.log(products)
  useEffect(()=>{
    const product = products.find((e)=> e.id === +id);
    console.log(product)
    setData(product)
  })
  const handleEdit = ()=>{
    const newObj = {
      name,
      price
    }
  }
  return (
    <div>
      <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)}/>
      <input type="number" name="" id="" value={price} onChange={(e)=> setPrice(e.target.value)}/>
      <input type="submit" value="Submit" onClick={handleEdit}/>
    </div>
  )
}

export default EditProduct