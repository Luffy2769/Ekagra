import React from 'react'
import '../static/Company.css'

export default function Company() {
    return (

            <div className='bg'>
                <div className='ee flex-column'>
                    <h3 className='d-flex justify-content-center text-white align-items-end mt-5 fs-1'>Ekagra Essence</h3>
                    <p className='mt-1 d-flex justify-content-center text-white'>
                        Art of Stillness and blah blah blah...
                    </p>
                </div>
                <div className='ee mt-5 d-grid col-1 mx-auto'>
                    <button type="button" className="btn shop-btn" style={{
                        border: "2px solid #e7a752ff", backgroundColor: "#e7a752ff", color: "#000000"
                    }}>
                        Shop
                    </button>
                </div>
            </div>
    )
}
