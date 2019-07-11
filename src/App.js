import React, { Component } from 'react';
import './App.css';
import Redirect from './router/Redirect';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Index from './components/Admin/Index';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     Categories :Categories
  //   }
  // }
  
  
  
  render() {
    // console.log(this.state.Categories);
    return (
      <div>
        <Router><Index/></Router>
      </div>
    );
  }

  // state = {
  //   isLoading: true,
  //   posts: []
  // };
  
  // async componentDidMount() {
  //   const response = await fetch('/api/v1/categories');
  //   const body = await response.json();
  //   this.setState({ posts: body, isLoading: false });
  // }
  
  // render() {
  //   const {posts, isLoading} = this.state;
  
  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  // console.log(posts);
  //   return (
      
  //     <div className="App">
  //       <header className="App-header">
    
  //             <h2>Post List</h2>
  //             <div>
  //               {posts.map(post =>
  //                 <div key={post.id}>
  //                 {post.content}
  //                 </div>)}
  //             </div>
            
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
