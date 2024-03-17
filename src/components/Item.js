import React ,{useState} from "react";

function Item({ name, category }) {

const[inCart,setIncart]=useState(false)
const incartClass=inCart ? "in-cart" : ""
function MarkInCart( ){
setIncart(!inCart)

if(inCart===true){
  return{}
}
}

  return (
    <li className={incartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={MarkInCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
