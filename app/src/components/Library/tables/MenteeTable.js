import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title"> Upcoming Events</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Mentee tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-13 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Mentee Table</h4> */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>Event Type</th>
                        <th>Start Date</th>
                        <th>Deadline</th>
                        <th>Mentor</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Basic OOP</td>
                        <td>IT/ITeS</td>
                        <td>Virtual</td>
                        <td>06 July 2020</td>
                        <td>04 July 2020</td>
                        <td><a href=" https://www.argo.com/">Mr. Kamal Singh</a></td>
                        <td><label className="badge badge-success">SCHEDULED</label></td> 
                      </tr>
                      <tr>
                        <td>Beauty/Wellness Consultant</td>
                        <td>Beauty/Wellness</td>
                        <td>Virtual Workshops</td>
                        <td>15 July 2020</td>
                        <td>13 July 2020</td>
                        <td><a href=" https://www.argo.com/">Mr. Charlie Green</a></td>
                        <td><label className="badge badge-success">SCHEDULED</label></td>  
                      </tr>
                      <tr>
                        <td>Delegation Training</td>
                        <td>Banking</td>
                        <td>Conference</td>
                        <td>30 June 2020</td>
                        <td>28 June 2020</td>
                        <td><a href=" https://www.argo.com/">Ms. Baburam  K.C</a></td>
                        <td><label className="badge badge-danger">CANCELED</label></td>
                      </tr>
                      <tr>
                        <td>Animation</td>
                        <td>Media and Entertainment</td>
                        <td>Virtual</td>
                        <td>01 May 2020</td>
                        <td>27 Apr 2020</td>
                        <td><a href=" https://www.argo.com/">Mrs.  Chaya  Shah</a></td>
                        <td><label className="badge badge-warning">COMPLETED</label></td>
                      </tr>
                      <tr>
                        <td>Beekeeping Training</td>
                        <td>Agriculture</td>
                        <td>Virtual Workshops</td>
                        <td>15 June 2020</td>
                        <td>12 June 2020</td>
                        <td><a href=" https://www.argo.com/">Argofarm.com</a></td>
                        <td><label className="badge badge-warning">COMPLETED</label></td>
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
