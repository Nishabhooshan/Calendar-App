import Sidebar from '../src/component/Sidebar';
import Header from '../src/component/Header';
import Calendar from './component/Calendar';
import EventsSchedule from './component/EventsSchedule';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <Calendar />
        <EventsSchedule />
      </div>
     
    </div>
  );
}

export default App;
