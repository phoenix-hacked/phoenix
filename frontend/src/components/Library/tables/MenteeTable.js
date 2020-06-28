import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleClose() {
    this.setState({visible: false})
  }

  handleShow() {
    this.setState({visible: true})
  }

  handleSubmission() {
    this.setState({visible: false});
    toastr.success('Registration successfull!');
  }

  render() {
    return (
      <div>
      <Modal show={this.state.visible} onHide={this.handleClose}>
        <Modal.Header>
          <Modal.Title>Basic Programming</Modal.Title>
        </Modal.Header>
        <Modal.Body>Want to attend "Programming Basic" session?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmission}>
            Yes. Register me for this event!
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="page-header">
          <h1 className="page-title">Upcoming sessions</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>View All</a></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Mentee Table</h4> */}
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>Event Type</th>
                        <th>Start Date</th>
                        <th>Deadline</th>
                        <th>Mentor</th>
                        {/* <th>Status</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={this.handleShow}>
                        <td>Programming Basic</td>
                        <td>IT/ITeS</td>
                        <td>Virtual</td>
                        <td>06 July 2020</td>
                        <td>04 July 2020</td>
                        <td><a href=" https://www.argo.com/">Mr. Kamal Singh</a></td>
                      </tr>
                      <tr>
                        <td>Beauty/Wellness Consultant</td>
                        <td>Beauty/Wellness</td>
                        <td>Virtual Workshops</td>
                        <td>15 July 2020</td>
                        <td>13 July 2020</td>
                        <td><a href=" https://www.argo.com/">Mr. Charlie Green</a></td>
                      </tr>
                      <tr>
                        <td>Delegation Training</td>
                        <td>Banking</td>
                        <td>Conference</td>
                        <td>30 June 2020</td>
                        <td>28 June 2020</td>
                        <td><a href=" https://www.argo.com/">Ms. Baburam  K.C</a></td>
                      </tr>
                      <tr>
                        <td>Animation</td>
                        <td>Media and Entertainment</td>
                        <td>Virtual</td>
                        <td>01 May 2020</td>
                        <td>27 Apr 2020</td>
                        <td><a href=" https://www.argo.com/">Mrs.  Chaya  Shah</a></td>
                      </tr>
                      <tr>
                        <td>Beekeeping Training</td>
                        <td>Agriculture</td>
                        <td>Virtual Workshops</td>
                        <td>15 June 2020</td>
                        <td>12 June 2020</td>
                        <td><a href=" https://www.argo.com/">Argofarm.com</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicTable
