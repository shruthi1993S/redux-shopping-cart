import React from 'react';
import { useCart } from './CartContext';
import './App.css'
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <h2> Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span className="quantity-button">{item.title} - ${item.price} x {item.quantity}</span>
                <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button  className="quantity-button"onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <button className="quantity-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
