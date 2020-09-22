import React, { useState } from "react";


function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  function handleInput(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function handleSubmit(){
    setItems(prevItems => {
      return [
        ...prevItems,
        inputText
      ]
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText} />
        <button type="submit" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
          <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
