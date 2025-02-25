import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleCategory(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
