import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state

    const handleRemove = (product) => {
        removeFromCart(product)
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = cart.reduce(reducer, 0)

        return sum
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>{cart.length > 0 ? `Cart List:` : `Cart is empty`}</h3>
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        {<button type='button' onClick={() => handleRemove(item)}>
                            <i className='fas fa-trash-alt' />
                        </button>}
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Total Price: $${handleSumTotal()}`}</h3>
                    <Link to="/checkout/information">
                        <button type='button'>Checkout</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export { Checkout }