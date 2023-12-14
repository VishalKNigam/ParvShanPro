import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { addProduct } from "./Redux/Products/action";
import { useDispatch } from "react-redux";
const width = 50; // The width of the rectangle
const goldenRatio = 1.6180339887; // The golden ratio
const initialState = {
  image: "",
  name: "",
  price: 0,
  brand: "",
  category: "",
  gender: "",
};
export const Admin = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    //1-- explicit return
    // console.log(name,value)
    //     setData((item)=> {
    //        return {...item, [name]: value}

    // })
    //2-- implicit return --- when u use parenthesis around the block of code
    // after arrow mark then it implicitically treated as sinle return only.
    // -- as a advanced developer, you should do like that only
    setData((item) => ({ ...item, [name]: name === "price" ? +value : value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addProduct(data));
    setData(initialState);
    // let existingData = JSON.parse(localStorage.getItem("data")) || [];
    // console.log("existingData", existingData);'
    // const newData = {...data};
    // existingData.push(newData);
    // localStorage.setItem("data", JSON.stringify(existingData))
    // console.log("newData", existingData)
    // setData([existingData])
  };
  //   console.log(data);
  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Image"
          name="image"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          onChange={handleChange}
          required
        />
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>

          <option value="top-wears">Top Wears</option>

          <option value="bottom-wears">Bottom Wears</option>

          <option value="foot-wears">Foot Wears</option>
        </select>
        <select name="gender" onChange={handleChange} required>
          <option value="">Select</option>

          <option value="male">Male</option>

          <option value="female">Female</option>

          <option value="unisex">Unisex</option>
        </select>
        
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};
const DIV = styled.div`
  margin: auto;
  border: 2px solid black;
  width: ${width}%;
  height: ${width / goldenRatio}%;
  padding: 30px;
  background: linear-gradient(white, darkgray, white);
  border-radius: 15px;

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin: 10px;
    height: 25px;
    background: linear-gradient(white, white);
    border-radius: 5px;
    outline: none;
  }
  select {
    margin: 10px;
    height: 25px;
    background: linear-gradient(white, white);
    cursor: pointer;
    border-radius: 5px;
    outline: none;
  }
  button {
    color: white;
    margin: 25px;
    background-color: #888;
    cursor: pointer;
    height: 30px;
    border-radius: 55px;
    outline: none;
  }
  button:hover {
    background-color: #666;
  }
`;
