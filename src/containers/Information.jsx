import React, { useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext)
    const form = useRef(null)
    const navigate = useNavigate()
    const { cart } = state

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'dept': formData.get('dept'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'pobox': formData.get('pobox'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer)
        navigate('/checkout/payment')
    }
    
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Contact info:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder='Full Name' name='name' />
                        <input type="text" placeholder='E-Mail' name='email' />
                        <input type="text" placeholder='Adress' name='address' />
                        <input type="text" placeholder='Department No.' name='dept' />
                        <input type="text" placeholder='Country' name='country' />
                        <input type="text" placeholder='State' name='state' />
                        <input type="text" placeholder='PO Box' name='pobox' />
                        <input type="text" placeholder='Phone number' name='phone' />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to='/checkout'>
                            Go back
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type='button' onClick={handleSubmit}>Pay</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Cart:</h3>
                {cart.map((item) => (
                    <div className="Information-item" key={item.id}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Information }