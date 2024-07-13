import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartPage from './CartPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Product Store</h1>
        <ProductList />
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
