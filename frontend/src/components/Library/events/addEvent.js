import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import moment from 'moment-timezone';
import axios from 'axios';
import Homepage from '../../Homepage'

const EventForm = (props) => {
  console.log(props)
  if(!props.user) {
    return (
      <Homepage />
    )
  }
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tag, setTag] = useState([])
  const [virtual, setVirtual] = useState(false);
  const [physical, setPhysical] = useState(false);

  const handleStartDate = (event) => {
    setStartDate(event.target.value)
  }
  const tags = [
    { value: 'Go Lang', label: 'Go Lang' },
    { value: 'Teaching', label: 'Teaching' },
    { value: 'Banking', label: 'Banking' }
  ]

  const handleEndDate = (event) => {
    setEndDate(event.target.value)
  }

  const handleTagsAdd = (selected) => {
    const tags = selected.map(s => {
      return s.value
    })
    setTag(tags);
  }

  const opts = [{ value: 'Marketing', label: 'Marketing' }, { value: 'Machine Learning', label: 'Machine Learning' }, { value: 'Accounting', label: 'Accounting' }]

  const renderCategory = () => {
    return opts.map(category => {
      return <option value={category.value} key={category.value}>{category.label}</option>
    })
  }

  const handleTypeChange = (e) => {
    const val = e.target.value;
    if(val === "0") {
      setVirtual(true)
      setPhysical(false)
    } else if(val === "1") {
      setPhysical(true)
      setVirtual(false)
    }
  }

  const handleSubmit = (event) => {
    NProgress.start();
    event.preventDefault();
    const formData = Array.prototype.slice.call(event.target).filter(el => el.id).reduce((form, el) => ({
      ...form,
      [el.id]: ['end_date', 'start_date'].includes(el.id) ? moment(el.value).utc().format() : el.value,
    }), {})
    formData.user_id = props.user.userID
    formData.mentor_id = props.user.userID
    formData.event_type = parseInt(formData.event_type)
    formData.status = 0
    formData.tags = tag
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_SERVICE}/events`,
      data: formData,
      headers: { 'Auth': JSON.stringify(props.userToken) },
    })
      .then(function (response) {
        toastr.success('Event successfully created.');
        NProgress.done();
        window.location.reload();

      })
      .catch(function (error) {
        console.log(error);
        toastr.error('Something went wrong.');
        NProgress.done();
      });
  }

  return (

    <div>
      <div className="d-flex justify-content-center">
        <div className="col-lg-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                Add a new event
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="name">
                  <Form.Label>
                    Title*
              </Form.Label>
                  <Form.Control type="text" placeholder="Name" autoComplete="off" required />
                </Form.Group>
                <Form.Group as={Row} controlId="description">
                  <Form.Label>
                    Description*
              </Form.Label>

                  <Form.Control as="textarea" rows="2" placeholder="Description" autoComplete="off" required />
                </Form.Group>
                <Form.Group as={Row} controlId="max_participants">
                  <Form.Label>
                    Max Participants*
              </Form.Label>

                  <Form.Control type="number" placeholder="Max Participants" autoComplete="off" required />
                </Form.Group>
                <Form.Group as={Row} controlId="event_type">
                  <Form.Label>
                    Type*
              </Form.Label>

                  <Form.Control as="select" onChange={handleTypeChange}>
                    <option value="">Please Select</option>
                    <option value="0">Virtual</option>
                    <option value="1">Physical</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                  <Form.Label>
                    Address
              </Form.Label>

                  <Form.Control as="textarea" rows="2" placeholder="Address" autoComplete="off" disabled={!physical} required={physical} />
                </Form.Group>

                <Form.Group as={Row} controlId="meeting_link">
                  <Form.Label>
                    Meeting Link
              </Form.Label>

                  <Form.Control type="text" placeholder="Meeting Link" autoComplete="off" disabled={!virtual} required={virtual} />
                </Form.Group>
                <Form.Group as={Row} controlId="start_datetime">
                  <Form.Label>
                    Start*
              </Form.Label>

                  <Form.Control type="datetime-local" placeholder="Start Date" value={startDate || props.startDate} onChange={handleStartDate} required />
                </Form.Group>
                <Form.Group as={Row} controlId="end_datetime">
                  <Form.Label>
                    End*
              </Form.Label>

                  <Form.Control type="datetime-local" placeholder="End Date" value={endDate || props.endDate} onChange={handleEndDate} required />
                </Form.Group>
                <Form.Group as={Row} controlId="category">
                  <Form.Label>
                    Category*
              </Form.Label>

                  <Form.Control as="select">
                    <option value="">Please Select</option>
                    {renderCategory()}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Row} controlId="tags">
                  <Form.Label>
                    Tags*
              </Form.Label>
                  <div className="w-100">
                    <Select className options={tags} isMulti={true}
                      onChange={(value) =>
                        handleTagsAdd(value)}
                      labelField={"label"}
                      searchBy={"label"}
                      searchable={true}
                    />
                  </div>
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary mr-2" type="submit">
                    Save Changes </button>
                </div>
              </Form >
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default EventForm;
