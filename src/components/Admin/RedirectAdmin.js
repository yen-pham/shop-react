import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Category from './Category';
import Content from './Content';

class RedirectAdmin extends Component {
    render() {
        return (
            <div>
                 <Route path="/admin/Categories" exact component={Category} />
                 <Route path="/admin" exact component={Content} />
            </div>
        );
    }
}

export default RedirectAdmin;