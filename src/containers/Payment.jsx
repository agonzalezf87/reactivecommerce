import React from 'react'
import '../styles/components/Payment.css'

const Payment = () => {
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Order resume:</h3>
                <div className="Payment-button">
                    PayPal button
                </div>
            </div>
        </div>
    )
}

export { Payment }