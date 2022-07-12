import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

export const CartItem = (props) => {
    const [Products, setProducts] = useState([]);
    return(
          <ItemsContext.CartItem value={[Products, setProducts]}>
            {props.children}
          </ItemsContext.CartItem>
        )
}

export default CartItem;