import React from 'react'
import '../styles/components/Success.css'

const Success = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Thanks for your purchase!</h2>
                <span>You will receive your items in 3 days:</span>
                <div className="Success-map">
                    Google Maps
                </div>
            </div>
        </div>
    )
}

export { Success }