import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import Button from './components/Button';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([]);

  const addEvents = (event) => { 
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
   }


  const handleClick = (id) => {
    // use a callback function when we want the previuse state
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
   }

   const subtitle = "All latest events in mario kingdom";

  return (
    <div className="App">
      
      <Title title="Events in Your area" subtitle={subtitle}/>
      
      {showEvents && (
        <div>
          <Button buttonText="hide events" handleEvent={() => setShowEvents(false)}/>
        </div>
      )}

      {!showEvents && ( 
        <div>
          <Button buttonText="show events" handleEvent={() => setShowEvents(true)}/>
        </div>
      )}
      
      {showEvents && <EventList events={events} buttonText="delete event" handleEvent={handleClick}/>}
      <br />
      <br />
      <Button buttonText="Add New Event" handleEvent={() => setShowModal(true)}/>
      
      {showModal &&
        <Modal>
          <NewEventForm addEvents={addEvents}/>
        </Modal>
      }
    </div>
  );
}

export default App;
