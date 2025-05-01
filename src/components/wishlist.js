import React from "react";

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className="container mt-4">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul className="list-group">
          {wishlist.map((item, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - ₹{item.price}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromWishlist(item)}
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

export default Wishlist;
