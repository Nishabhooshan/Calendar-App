import React from 'react';
import { FaHome, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white p-3 border-end">
      <div className="menu-item d-flex align-items-center mb-4">
        <FaHome className="menu-icon" />
        <span className="ms-2">Home</span>
      </div>

      <div className="menu-item mb-4">
        <div
          className="d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          data-bs-target="#academiMenu"
          aria-expanded="true"
        >
          <div className="d-flex align-items-center">
            <FaCalendarAlt className="menu-icon" />
            <span className="ms-2">Academi</span>
          </div>
          <FaChevronDown />
        </div>

        <div id="academiMenu" className="collapse show ps-4 mt-2">
          <div className="menu-link active">Academi Calendar</div>
          <div className="menu-link">My Calendar</div>
        </div>
      </div>

      <div>
        <h6 className="section-title mb-3">My Schedule</h6>
        <div className="schedule-item event-1 mb-2">
          <input type="checkbox" id="event1" defaultChecked />
          <label htmlFor="event1"></label>
          <span>Event-1</span>
        </div>
        <div className="schedule-item event-2 mb-2">
          <input type="checkbox" id="event2" defaultChecked />
          <label htmlFor="event2"></label>
          <span>Event-2</span>
        </div>
        <div className="schedule-item event-3 mb-2">
          <input type="checkbox" id="event3" />
          <label htmlFor="event3"></label>
          <span>Event-3</span>
        </div>
        <div className="schedule-item event-4 mb-2">
          <input type="checkbox" id="event4" />
          <label htmlFor="event4"></label>
          <span>Event-4</span>
        </div>
        <div className="schedule-item event-5 mb-2">
          <input type="checkbox" id="event5" defaultChecked />
          <label htmlFor="event5"></label>
          <span>Event-5</span>
        </div>
      </div>

      <div className="mt-4">
        <h6 className="section-title mb-3">Upcoming Events</h6>
        <div className="upcoming-event-card d-flex align-items-center mb-3 p-2">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event-1" className="event-img me-2" />
          <div>
            <div className="fw-bold">Event-1</div>
            <small className="text-muted">Description • 10:00 AM</small>
          </div>
        </div>
        <div className="upcoming-event-card d-flex align-items-center mb-3 p-2">
          <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Event-2" className="event-img me-2" />
          <div>
            <div className="fw-bold">Event-2</div>
            <small className="text-muted">Description • 12:00 AM</small>
          </div>
        </div>
        <div className="upcoming-event-card d-flex align-items-center mb-3 p-2">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Event-3" className="event-img me-2" />
          <div>
            <div className="fw-bold">Event-3</div>
            <small className="text-muted">Description • 12:00 AM</small>
          </div>
        </div>
        <div className="upcoming-event-card d-flex align-items-center mb-3 p-2">
          <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Event-4" className="event-img me-2" />
          <div>
            <div className="fw-bold">Event-4</div>
            <small className="text-muted">Description • 12:00 AM</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
