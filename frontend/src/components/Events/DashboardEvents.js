import React from 'react';
import {initiateDashboardEventData} from '../../redux/dashboard_events/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const createEventItem = (eventDetails) => {
  return (<tr key={`event-${eventDetails.id}`}>
    <td>{eventDetails.title}</td>
    <td>{eventDetails.category}</td>
    <td>{eventDetails.event_type === 0 ? <a href={eventDetails.meeting_link} target="_blank">Virtual Conference</a> : eventDetails.address}</td>
    <td>{new Date(eventDetails.start_time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
    <td style={{ textAlign: "center" }}>{eventDetails.attendees}</td>
    <td><Link to={`/profile/${eventDetails.mentor_id}`} className="text-align-left">{eventDetails.mentor_name}</Link></td>
  </tr>); 
};

const listEvents = (eventList = []) => {
  const eventObj = [];
  eventList.map((event) => {
    eventObj.push(createEventItem(event));
  });
  return eventObj;
};

const DashboardEvents = () => {
  const dispatch = useDispatch();
  const eventInfo = useSelector(state => state.dashboardEvents);
  
  React.useEffect(() => {
    dispatch(initiateDashboardEventData());
  }, []);
  if (!eventInfo.dashboardEvent || !eventInfo.dashboardEvent.length) {
    return null;
  }
  const events = eventInfo.dashboardEvent || [];
  console.log(event);

  return (<div>
    <div className="page-header">
      <h1 className="page-title">Upcoming Events</h1>
    </div>
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Category</th>
                    <th>Event Type</th>
                    <th>Start Date</th>
                    <th>Participants</th>
                    <th>Mentor</th>
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
    </div>
  </div>)
}

export default DashboardEvents;
