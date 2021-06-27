import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { createEvent } from '../../store/event/event.reducer'

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventReducer)
  const [eventName, setEventName] = useState('');

  const handleChange = (value) => {
    setEventName(value);
  }
  const handleCreate = () => {
    dispatch(createEvent(eventName));
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Event name"
          aria-label="Event name"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleCreate}>Create</Button>
        </InputGroup.Append>
      </InputGroup>


    </div>
  )
};

export default EventsPage;
