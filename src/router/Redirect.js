import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Index from '../components/Admin/Index';

class Redirect extends Component {
    render() {
        return (
            <div>
                    <Route path="/admin/" exact component={Index} />
                    
             </div>
        );
    }
}

export default Redirect;