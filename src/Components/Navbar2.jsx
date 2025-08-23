import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs';
import '../Static/Navbar2.css'

export default function Navbar2() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg fixed-top align-items-center" style={{ backgroundColor: "#b89842ff", top: "23px" }}>
      <span className="navbar-brand ms-4" style={{fontSize: "24px"}}>Ekagra Essence</span>

      {/* Hamburger button - only shows when the screen is small */}
      <button 
        className="navbar-toggler py-1" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible contents of navbar */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto d-flex justify-content-evenly w-47">
          <li className="nav-item"><a className="nav-link mx-4 fs-5" href="#">Home</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle mx-4 fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Category 1</a></li>
              <li><a className="dropdown-item" href="#">Category 2</a></li>
              <li><a className="dropdown-item" href="#">Category 3</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link mx-4 fs-5" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link mx-4 fs-5" href="#">Contact</a></li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link me-1 ms-4 fs-5" href="#">
              <span className="d-lg-none">{!isCollapsed ? "Cart" : <BsBag size={24} />}</span>
              <span className="d-none d-lg-inline"><BsBag size={24} /></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}