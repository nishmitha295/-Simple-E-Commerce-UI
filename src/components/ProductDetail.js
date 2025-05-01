import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary mb-3">₹{product.price}</h4>
          <button className="btn btn-success btn-lg" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
