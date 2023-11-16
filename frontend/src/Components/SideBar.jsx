import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll("gender") || []);
  const [order, setOrder] = useState(searchParams.get(`order`)  || "");
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((ele) => ele !== value);
      console.log("newGender", newGender);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
    console.log(gender);
  };
  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
      console.log(newCategory);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  const handlePrice = (e) => {
    const { value } = e.target;

    setOrder(value);
    console.log(order);
  };

  useEffect(() => {
    const params = {
      gender: gender,
      category: category,
      
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order]);
  return (
    <div>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          id="Men"
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          id="Women"
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"unisex"}
          id="Kids"
          onChange={handleGender}
          checked={gender.includes("unisex")}
        />
        <label>Kids</label>
      </div>
      <h3>Filter by Category</h3>
      <div>
        <input
          type="checkbox"
          value={"top-wears"}
          id=""
          onChange={handleCategory}
          checked={category.includes("top-wears")}
        />
        <label>Top Wears</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wears"}
          id=""
          onChange={handleCategory}
          checked={category.includes("bottom-wears")}
        />
        <label>Bottom Wears</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"foot-wears"}
          id=""
          onChange={handleCategory}
          checked={category.includes("foot-wears")}
        />
        <label>Foot Wears</label>
      </div>
      <h3>Sort By Price</h3>
      <div>
        <input
          type="radio"
          name="order"
          onChange={handlePrice}
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Low to high</label>
      </div>
      <div>
        <input
          type="radio"
          name="order"
          onChange={handlePrice}
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>High to low</label>
      </div>
      <div>
        <input
          type="radio"
          name="order"
          onChange={handlePrice}
          value={""}
          
        />
        <label>Reset</label>
      </div>
    </div>
  );
};
