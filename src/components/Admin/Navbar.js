import React, { Component } from 'react';
import { BrowserRouter as Router , Route, NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{backgroundImage: 'url(http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-5_044127233.jpg)', fontSize: '14px'}}>
  {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Interface
                </div>
                {/* Nav Item - Pages Admin Menu */}
                <li className="nav-item">
                    <a aria-controls="collapseTwo" aria-expanded="true" className="nav-link collapsed" data-target="#collapseTwo" data-toggle="collapse" href="#">
                    <i className="fas fa-fw fa-cog" />
                    <span>Admin</span>
                    </a>
                    <div aria-labelledby="headingTwo" className="collapse" data-parent="#accordionSidebar" id="collapseTwo">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Details</h6>
                        <a className="collapse-item" href="/admin/users">Users</a>
                        <a className="collapse-item" href="/admin/roles">Roles</a>
                    </div>
                    </div>
                </li>
                {/* Nav Item - Pages Shipper Menu */}
                <li className="nav-item">
                    <a aria-controls="collapseTwo" aria-expanded="true" className="nav-link collapsed" data-target="#Shipper" data-toggle="collapse" href="#">
                    <i className="fas fa-fw fa-cog" />
                    <span>Shipper Manager</span>
                    </a>
                    <div aria-labelledby="headingTwo" className="collapse" data-parent="#accordionSidebar" id="Shipper">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="/admin/shippers">Shipper manager</a>
                        <a className="collapse-item" href="/admin">Subcribe manager</a>
                    </div>
                    </div>
                </li>
                {/* Nav Item - Pages Product Menu */}
                <li className="nav-item">
                    <a aria-controls="collapseTwo" aria-expanded="true" className="nav-link collapsed" data-target="#Product" data-toggle="collapse" href="#">
                    <i className="fas fa-fw fa-cog" />
                    <span>Product Manager</span>
                    </a>
                    <div aria-labelledby="headingTwo" className="collapse" data-parent="#accordionSidebar" id="Product">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="/admin/products">All Product </a>
                        <NavLink className="collapse-item" to="/admin/categories">Categories</NavLink>
                        <a className="collapse-item" href="/admin">Special price</a>
                        <a className="collapse-item" href="/admin/suppliers">Suppliers </a>
                        <a className="collapse-item" href="/admin">Import product </a>
                        <a className="collapse-item" href="/admin">Attributes group </a>
                    </div>
                    </div>
                </li>
                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <a aria-controls="collapseUtilities" aria-expanded="true" className="nav-link collapsed" data-target="#Order" data-toggle="collapse" href="#">
                    <i className="fas fa-fw fa-wrench" />
                    <span>Order Manager</span>
                    </a>
                    <div aria-labelledby="headingUtilities" className="collapse" data-parent="#accordionSidebar" id="Order">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="/admin/orders">Order Manager</a>
                        <a className="collapse-item" href="/admin/orderDetails">Order Details</a>
                        <a className="collapse-item" href="/admin">Shipping status</a>
                    </div>
                    </div>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Addons
                </div>
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a aria-controls="collapsePages" aria-expanded="true" className="nav-link collapsed" data-target="#collapsePages" data-toggle="collapse" href="#">
                    <i className="fas fa-fw fa-folder" />
                    <span>Pages</span>
                    </a>
                    <div aria-labelledby="headingPages" className="collapse" data-parent="#accordionSidebar" id="collapsePages">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider" />
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                    </div>
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Charts</span></a>
                </li>
                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
                </ul>

        );
    }
}

export default Navbar;