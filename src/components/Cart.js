import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { ItemsContext } from "./CartItem";

const Cart = ({ match }) => {
    const [cartItems, setCartItems] = useContext(ItemsContext);
    const [checkoutTotal, setCheckoutTotal] = useState(0)

    const getTotal = (product) => {
        return (product.price * product.quantity).toFixed(2)
    }

    const getCheckoutTotal = () => {
        let totals = []
        cartItems.forEach(product => {
            totals.push(product.quantity * product.price)
        })
        if (totals.length > 0) {
            let total = totals.reduce((acc, price) => {
                return acc + price
            })
            return total
        }
    }

    useEffect(() => {
        let total = getCheckoutTotal();
        console.log(total)
        if (total) { total = total.toFixed(2) }
            setCheckoutTotal(total);
    })

    const removeItem = (idx) => {
        let newCart = [...cartItems]
        newCart.splice(idx, 1)
        setCartItems(newCart)
    }

    return (
          <div className="cart-wrap">
            <div className="cart-box">
                <h3>Shopping Cart</h3>
                <div>
                  {cartItems.map((product, idx) => {
                  return (
                    <div key={idx} className="cart-item">
                      <h2>{product.title}</h2>
                      <h4>Price: ${product.price}</h4>
                      <h4>Quantity: ${product.quantity}</h4>
                      <h4>Sub Total: ${getTotal(product)}</h4>
                      <button onClick={() => removeItem(idx)}>Remove</button>
                    </div>
                  )
                  })}
                  <h2 className="grand-total">Total: ${checkoutTotal}</h2>
                  <Link to="./vending">
                    <button id="checkout">Checkout</button>
                  </Link>
                </div>
            </div>
          </div>
    )
}

export default Cart;