import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaCaretDown } from 'react-icons/fa';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [showDropdown, setShowDropdown] = useState(false);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleNavigate = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title">
          <div className="dropdown" onClick={toggleDropdown}>
            <span>Calendar India</span>
            <FaCaretDown className="dropdown-icon" />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">India</div>
                <div className="dropdown-item">USA</div>
                <div className="dropdown-item">UK</div>
              </div>
            )}
          </div>
        </div>
        <div className="arrows">
          <FaChevronLeft className="arrow" onClick={() => handleNavigate(-1)} />
          <span className="current-date">{formatDate(currentDate)}</span>
          <FaChevronRight className="arrow" onClick={() => handleNavigate(1)} />
        </div>
        <div className="view-options">
          <button className={`view-btn ${view === 'day' ? 'active' : ''}`} onClick={() => setView('day')}>Day</button>
          <button className={`view-btn ${view === 'week' ? 'active' : ''}`} onClick={() => setView('week')}>Week</button>
          <button className={`view-btn ${view === 'month' ? 'active' : ''}`} onClick={() => setView('month')}>Month</button>
          <button className={`view-btn ${view === 'year' ? 'active' : ''}`} onClick={() => setView('year')}>Year</button>
        </div>
        <div className="calendar-icon-and-today">
          <FaCalendarAlt className="calendar-icon" />
          <button className="today-btn" onClick={handleToday}>Today</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
