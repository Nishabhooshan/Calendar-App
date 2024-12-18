import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaStar, FaCalendarAlt, FaBell, FaComments } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
      <div className="d-flex align-items-center">
        <div className="circle me-3"></div>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search..."
        />
      </div>

      <div className="d-flex gap-3">
        <FaHome size={20} className="text-secondary cursor-pointer" />
        <FaStar size={20} className="text-secondary cursor-pointer" />
        <FaCalendarAlt size={20} className="text-secondary cursor-pointer" />
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="icon-container position-relative">
          <FaComments size={20} className="icon" />
          <span className="badge badge-danger">3</span>
        </div>

        <div className="icon-container position-relative">
          <FaBell size={20} className="icon" />
          <span className="badge badge-danger">6</span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="profile-img rounded-circle me-2"
          />
          <span className="fw-semibold profile-name">Jacob Botssh</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
