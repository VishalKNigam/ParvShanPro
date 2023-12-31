import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f1c40f;
  padding: 20px;
  margin: 10px;
  border: 2px solid #e67e22;

  h3 {
    margin: 10px 0px;
    color: #2c3e50;
    font-size: 1.1em;
    background-color: #fff;
    border-radius: 2%;
    padding: 2px;
  }

  div {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;

    input {
      margin-bottom: 5px;
    }
  }

  label {
    font-size: 14px;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }

  input[type="checkbox"] {
    margin-right: 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #e74c3c;
    }
  }

  .radio-group {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h3 {
      
      text-align: center; // Center-align h3 on small screens
      margin-bottom: 10px; // Add margin at the bottom
    }
    div {
      align-items: center;
    }
  }
  @media (max-width: 688px) {
    h3 {
      visibility: hidden;
      text-align: center; // Center-align h3 on small screens
      margin-bottom: 10px; // Add margin at the bottom
    }
    div {
    display: flex;
    flex-direction: column;
  }
  }
`;

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll("gender") || []);
  const [order, setOrder] = useState(searchParams.get(`order`) || "");
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((ele) => ele !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    setOrder(value);
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
    <StyledSideBar>
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
      <div className="radio-group">
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
    </StyledSideBar>
  );
};


