import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LOGO from '../img/logo.png';
import BG_IMAGE from '../img/bg.png';
// import './Navbar.css'; // Import the custom CSS file

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={LOGO} alt="Logo" className="navbar-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Find Suppliers
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle me-3"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Find Service Tags
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item text-success">
                <button className="btn btn-outline-success">Login / Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-5 text-center bg-image" style={{ backgroundImage: `url(${BG_IMAGE})` }}>
        <div className="overlay"></div>
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white text-center">
              <h1 className="mb-3 main-heading mt-5">
                Are You a Supplier?<br />
                <span className="fw-normal">Explore Matching Opportunities</span>
              </h1>
              <div className="d-flex flex-column flex-md-row gap-2 mt-3 w-100">
                <div className="input-icon flex-fill">
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                  <input type="text" className="form-control" placeholder="Search your required service here" />
                </div>
                <div className="input-icon flex-fill mt-2 mt-md-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <input type="text" className="form-control" placeholder="Search your desired location here" />
                </div>
                <button className="btn btn-success mt-2 mt-md-0">Search</button>
              </div>
              <p className="mt-3 hero-text">
                Are you a buyer? <a href="#" className="text-white underline-link">Click here if you are looking to post a requirement</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
