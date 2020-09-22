import React from 'react';

function ToDo(props) {

  // const [isClicked, setIsClicked] = useState(false)

  // function handleClick() {
  //   setIsClicked((prevValue) => {
  //     return !prevValue;
  //   })
  // }

  return (
    <div 
      onClick={() => {
        props.onClick(props.id);
        }}>
        <li >{props.text}</li>
    </div>
  )
}
// style={{ textDecoration: isClicked? "line-through" : "none"}}
export default ToDo;