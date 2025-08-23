import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
    return (
        <>
        <nav className="d-flex justify-content-between p-3">
            <div className='d-flex justify-content-start'>Ekagra Essence</div>
            <div className= "d-flex">
                <a href="/"><li className='nav-link mx-4'>Home</li></a>
                <a href="/About"><li className='nav-link mx-4'>About</li></a>
                <a href="Contact"><li className='nav-link mx-4'>Contact</li></a>
            </div>  
             <a href="/cart"  className='d-flex justify-content-end'> <FiShoppingCart size={34}/></a>
        </nav>
        </>
    )
}
