import React from 'react'
import '../styles/components/Checkout.css'

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Cart List:</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>ITEM name</h4>
                        <span>$10</span>
                    </div>
                    <button type='button'>Remove</button>
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Total Price: $10</h3>
                <button type='button'>Checkout</button>
            </div>
        </div>
    )
}

export { Checkout }