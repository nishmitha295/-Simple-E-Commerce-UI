import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/product";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../App.css';

function Home({ addToCart, wishlist, toggleWishlist }) {

  // Save wishlist to localStorage for persistence
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => {
          const isWishlisted = wishlist.some(p => p.id === product.id);
          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm product-card">
                <div className="image-container">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                </div>
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Category</span>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="product-price">₹{product.price}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/product/${product.id}`} className="btn btn-outline-primary">View</Link>
                    <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                    <button
                      className={`btn ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`}
                      onClick={() => toggleWishlist(product)}
                    >
                      {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
