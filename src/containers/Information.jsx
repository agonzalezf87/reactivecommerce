import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Information.css'

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Contact info:</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" placeholder='Full Name' name='name' />
                        <input type="text" placeholder='E-Mail' name='email' />
                        <input type="text" placeholder='Adress' name='address' />
                        <input type="text" placeholder='Department No.' name='dept' />
                        <input type="text" placeholder='Country' name='country' />
                        <input type="text" placeholder='State' name='state' />
                        <input type="text" placeholder='Po Box' name='pobox' />
                        <input type="text" placeholder='Phone number' name='phone' />
                    </form>
                </div>
                <div className="Information-back">
                    Go back
                </div>
                <div className="Information-next">
                    <Link to="/payment">
                        Pay
                    </Link>
                </div>
                <div className="Information-sidebar">
                    <h3>Cart:</h3>
                    <div className="Information-item">
                        <div className="Information-element">
                            <h4>ITEM Name</h4>
                            <span>$10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Information }