import React from "react";

export default function Headers() {
  return (
      
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4"  style={{ color: "#306754" }}>Mesejji</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page"  style={{ color: "#306754",backgroundColor: "#CFECEC" }}>Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link" style={{ color: "#306754" }}>Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link" style={{ color: "#306754" }}>Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link" style={{ color: "#306754" }}>FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link" style={{ color: "#306754" }}>About</a></li>
        </ul>
      </header>
  
  );
}

