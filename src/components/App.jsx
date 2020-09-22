import React, { useState } from "react";
import ToDo from './todoItem';
import Header from './header';


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

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <Header />
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText} />
        <button type="submit" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
          <ToDo 
            key={index}
            id={index}
            text={todoItem}
            onClick={deleteItem}
          />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
