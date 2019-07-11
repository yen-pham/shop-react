import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="col-lg-6 mb-4">
            {/* Project Card Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                <div className="progress mb-4">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            {/* Color System */}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-primary text-white shadow">
                  <div className="card-body">
                    Primary
                    <div className="text-white-50 small">#4e73df</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-success text-white shadow">
                  <div className="card-body">
                    Success
                    <div className="text-white-50 small">#1cc88a</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">
                    Info
                    <div className="text-white-50 small">#36b9cc</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-warning text-white shadow">
                  <div className="card-body">
                    Warning
                    <div className="text-white-50 small">#f6c23e</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                  <div className="card-body">
                    Danger
                    <div className="text-white-50 small">#e74a3b</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-secondary text-white shadow">
                  <div className="card-body">
                    Secondary
                    <div className="text-white-50 small">#858796</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Projects;