import React from 'react';
import {initiateEventData} from '../../redux/events/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const eventRating = (id, rating) => {
  const a = [];
  for(let i = 0; i < 5; i++) {
    a.push(<span key={"rating" + id + "-" + i} className="fa fa-star" style={{color: i < rating ? "orange" : "grey"}}></span>);
  }
  return a;
}
const eventType = (status) => {
  switch (status) {
    case 0:
      return <label className="badge badge-primary">SCHEDULED</label>;
    case 1:
      return <label className="badge badge-success">COMPLETED</label>;
    case 2:
      return <label className="badge badge-danger">CANCELLED</label>;
    case 3:
      return <label className="badge badge-warning">ARCHIVED</label>;
    default:
      return null;
  }
}

const createEventItem = (eventDetails) => {
  return (<tr key={`event-${eventDetails.id}`}>
    <td>{eventDetails.title}</td>
    <td>{eventDetails.event_type === 0 ? <a href={eventDetails.meeting_link} target="_blank">Virtual Conference</a> : eventDetails.address}</td>
    <td>{new Date(eventDetails.start_time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
    <td style={{ textAlign: "center" }}>{eventDetails.participants_number}</td>
    <td>{eventType(eventDetails.status)}</td>
    <td>
      {
        eventRating(eventDetails.id, eventDetails.rating)
      }
    </td>
  </tr>);
};

const createMenteeEventItem = (eventDetails) => {
  console.log(eventDetails);
  return (<tr key={`event-${eventDetails.id}`}>
    <td>{eventDetails.title}</td>
    <td>{eventDetails.event_type === 0 ? <a href={eventDetails.meeting_link} target="_blank">Virtual Conference</a> : eventDetails.address}</td>
    <td>{new Date(eventDetails.start_time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
    {/* <td style={{ textAlign: "center" }}>{eventDetails.participants_number}</td> */}
    <td><Link to={`/profile/${eventDetails.mentor_id}`}>{eventDetails.mentor_name}</Link></td>
    <td>{eventType(eventDetails.status)}</td>
  </tr>);
};

const listEvents = (eventList) => {
  const eventObj = [];
  eventList.map((event) => {
    eventObj.push(createEventItem(event));
  });
  return eventObj;
};


const listMenteeEvents = (eventList) => {
  const eventObj = [];
  eventList.map((event) => {
    eventObj.push(createMenteeEventItem(event));
  });
  return eventObj;
};

const Events = (props) => {
  const dispatch = useDispatch();
  const eventInfo = useSelector(state => state.events);
  
  React.useEffect(() => {
    dispatch(initiateEventData(props.userId));
  }, []);
  if (!eventInfo) {
    return null;
  }
  const events = eventInfo.event.mentored_events || [];
  const menteeEvents = eventInfo.event.participated_events || [];

  return (<div>
    {
     !events.length && !menteeEvents.length ? <div className="col-12 display-5">No events</div> : ''
    }
    {
      events.length ?
      (<><div className="page-header">
        <h1 className="page-title">Mentoring Events</h1>
      </div>
      <div className="row">
        <div className="col-lg-13 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Topic</th>
                      <th>Event Type</th>
                      <th>Start Date</th>
                      <th>Attendees</th>
                      <th>Status</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listEvents(events)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div></>) : ''
    }
    {
      menteeEvents.length ?
     (<><div className="page-header">
      <h1 className="page-title">Participating Events</h1>
    </div>
    <div className="row">
      <div className="col-lg-13 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Event Type</th>
                    <th>Start Date</th>
                    <th>Mentor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {listMenteeEvents(menteeEvents)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div></>) : ''}
      </div>)
}

export default Events;
