import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <ul className="list-group shadow-sm">
          {cart.map((item, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> <br />
                <small className="text-muted">₹{item.price}</small>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
