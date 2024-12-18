import React, { useCallback, memo } from 'react';
import '../styles/EventsSchedule.css';

const events = [
  { title: "Event-1", time: "07:00 AM - 08:00 AM", color: "#4A90E2", start: "07:00 AM", end: "08:00 AM" },
  { title: "Event-2", time: "07:00 AM - 10:00 AM", color: "#50E3C2", start: "07:00 AM", end: "10:00 AM" },
  { title: "Event-3", time: "11:00 AM - 01:00 PM", color: "#F5A623", start: "11:00 AM", end: "01:00 PM" },
  { title: "Event-4", time: "11:00 AM - 01:00 PM", color: "#9013FE", start: "11:00 AM", end: "01:00 PM" },
  { title: "Event-5", time: "02:00 PM - 05:00 PM", color: "#D0021B", start: "02:00 PM", end: "05:00 PM" },
  { title: "Event-6", time: "02:00 PM - 03:00 PM", color: "#B8E986", start: "02:00 PM", end: "02:00 PM" },
];

const Event = memo(({ event }) => {
  const getTimeSlot = useCallback((time) => {
    const [hour, minute, period] = time.split(/[: ]/);
    return parseInt(hour) + (period === 'PM' && hour !== '12' ? 12 : 0);
  }, []);

  const startTime = getTimeSlot(event.start);
  const endTime = getTimeSlot(event.end);
  const duration = Math.max(endTime - startTime, 1);

  return (
    <div
      className="event"
      style={{
        backgroundColor: event.color,
        gridRow: `${startTime - 6} / span ${duration}`,
      }}
    >
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.time}</p>
      </div>
    </div>
  );
});

const EventsSchedule = () => {
  const timeSlots = [
    "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM",
  ];

  return (
    <div className="schedule-container">
      <h2>Upcoming Scheduled Events</h2>
      <div className="schedule">
        <div className="time-slots">
          {timeSlots.map((time, index) => (
            <div className="time-slot" key={index}>
              {time}
            </div>
          ))}
        </div>
        <div className="events">
          {events.map((event) => (
            <Event key={event.title} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSchedule;
