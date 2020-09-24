import React, { useState } from "react";
import ToDo from './todoItem';
import Header from './header';
import InputArea from './inputArea';

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  function handleInput(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem(){
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
      <InputArea 
        onChange={handleInput}
        onClick={addItem}
        value={inputText}
      />
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
