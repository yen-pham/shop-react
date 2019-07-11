import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content'
import RedirectAdmin from './RedirectAdmin';
import Nav from './Nav';

class Index extends Component {
    render() {
        return (
            <div id = "wrapper">
                <Navbar/>
                <div className="d-flex flex-column" id="content-wrapper">
                {/* Main Content */}
                <div id="content">
                <Nav/>
                <RedirectAdmin/>
                </div></div>
            </div>
        );
    }
}

export default Index;