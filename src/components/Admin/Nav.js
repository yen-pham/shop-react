import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style={{backgroundImage: 'url(http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-5_044127233.jpg)'}}>
            {/* Sidebar Toggle (Topbar) */}
            <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop">
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input aria-describedby="basic-addon2" aria-label="Search" className="form-control bg-light border-0 small" placeholder="Search for..." type="text" style={{borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px'}} />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" style={{borderBottomRightRadius: '50px', borderTopRightRadius: '50px'}}>
                    <i className="fa fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="searchDropdown" role="button">
                  <i className="fa fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div aria-labelledby="searchDropdown" className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input aria-describedby="basic-addon2" aria-label="Search" className="form-control bg-light border-0 small" placeholder="Search for..." type="text" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fa fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              {/* Nav Item - Alerts */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="alertsDropdown" role="button">
                  <i className="fa fa-bell fa-fw" />
                  {/* Counter - Alerts */}
                  <span className="badge badge-danger badge-counter">3+</span>
                </a>
                {/* Dropdown - Alerts */}
                <div aria-labelledby="alertsDropdown" className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
                  <h6 className="dropdown-header">
                    Alerts Center
                  </h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fa fa-file- text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 12, 2019</div>
                      <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fa fa-donate text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 7, 2019</div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fa fa-exclamation-triangle text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 2, 2019</div>
                      Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                  </a>
                  <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
              </li>
              {/* Nav Item - Messages */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="messagesDropdown" role="button">
                  <i className="fa fa-envelope fa-fw" />
                  {/* Counter - Messages */}
                  <span className="badge badge-danger badge-counter">7</span>
                </a>
                {/* Dropdown - Messages */}
                <div aria-labelledby="messagesDropdown" className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
                  <h6 className="dropdown-header">
                    Message Center
                  </h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" />
                      <div className="status-indicator bg-success" />
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img  className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" />
                      <div className="status-indicator" />
                    </div>
                    <div>
                      <div className="text-truncate">I have the photos that you ordered last month, how would
                        you like them sent to you?
                      </div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img  className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" />
                      <div className="status-indicator bg-warning" />
                    </div>
                    <div>
                      <div className="text-truncate">Last month's report looks great, I am very happy with the
                        progress so far, keep up the good work!
                      </div>
                      <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img  className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" />
                      <div className="status-indicator bg-success" />
                    </div>
                    <div>
                      <div className="text-truncate">Am I a good boy? The reason I ask is because someone told
                        me that people say this to all dogs, even if they aren't good...
                      </div>
                      <div className="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
                  </a>
                  <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
              </li>
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="userDropdown" role="button">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small"> Yen</span>
                  <img className="img-profile rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2e7i12cgcy9HddNj9-j1MS12Vq2DaUGvXr1pmL6ZpbnhIExeo" />
                </a>
                {/* Dropdown - User Information */}
                <div aria-labelledby="userDropdown" className="dropdown-menu dropdown-menu-right shadow animated--grow-in">
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" data-target="#logoutModal" data-toggle="modal" href="/logout">
                    <i className="fa fa-sign-out- fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          
                
               

        );
    }
}

export default Nav;