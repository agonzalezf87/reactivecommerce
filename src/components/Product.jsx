import React from 'react'

function Product({ product, handleAddToCart }) {
  return (
    <div className="Products-item">
        <img src={product.image} alt={product.title} />
        <div className="Product-item-info">
            <h2>{Product.title}
                <span>$ {product.price}</span>
            </h2>
            <p>{product.description}</p>
        </div>
        <button type='button' onClick={handleAddToCart}>Buy</button>
    </div>
  )
}

export { Product }