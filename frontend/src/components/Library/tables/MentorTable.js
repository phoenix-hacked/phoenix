import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Upcoming Events</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>View All</a></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-13 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Mentor Table</h4> */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th>Field</th>
                        <th>Event Type</th>
                        <th>Start Date</th>
                        <th>Deadline</th>
                        <th>Attendees</th>
                        <th>Status</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Basic OOP</td>
                        <td>IT/ITeS</td>
                        <td>Virtual</td>
                        <td>06 July 2020</td>
                        <td>04 July 2020</td>
                        <td style={{ textAlign: "center" }}><a href=" https://www.argo.com/">15</a></td>
                        <td><label className="badge badge-success">SCHEDULED</label></td>
                        <td>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        </td>
                      </tr>
                      <tr>
                        <td>Beauty/Wellness Consultant</td>
                        <td>Beauty/Wellness</td>
                        <td>Virtual Workshops</td>
                        <td>15 July 2020</td>
                        <td>13 July 2020</td>
                        <td style={{ textAlign: "center" }}><a href=" https://www.argo.com/">10</a></td>
                        <td><label className="badge badge-success">SCHEDULED</label></td>
                        <td>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        </td>
                      </tr>
                      <tr>
                        <td>Delegation Training</td>
                        <td>Banking</td>
                        <td>Conference</td>
                        <td>30 June 2020</td>
                        <td>28 June 2020</td>
                        <td style={{ textAlign: "center" }}><a href=" https://www.argo.com/">8</a></td>
                        <td><label className="badge badge-danger">CANCELED</label></td>
                        <td>
                        <span className="fa fa-star checked" style={{color: "orange"}}></span>
                        <span className="fa fa-star checked" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        </td>
                      </tr>
                      <tr>
                        <td>Animation</td>
                        <td>Media and Entertainment</td>
                        <td>Virtual</td>
                        <td>01 May 2020</td>
                        <td>27 Apr 2020</td>
                        <td style={{ textAlign: "center" }}><a href=" https://www.argo.com/">16</a></td>
                        <td><label className="badge badge-warning">COMPLETED</label></td>
                        <td>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        </td>
                      </tr>
                      <tr>
                        <td>Beekeeping Training</td>
                        <td>Agriculture</td>
                        <td>Virtual Workshops</td>
                        <td>15 June 2020</td>
                        <td>12 June 2020</td>
                        <td style={{ textAlign: "center" }}><a href=" https://www.argo.com/">15</a></td>
                        <td><label className="badge badge-warning">COMPLETED</label></td>
                        <td>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "orange"}}></span>
                        <span className="fa fa-star" style={{color: "grey"}}></span>
                        </td>
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
