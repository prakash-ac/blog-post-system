import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Users from './containers/Users/Users';
import Posts from './containers/Posts/Posts';
import NoMatch from './components/NoMatch';
import './App.css';
import PostWithComments from './containers/PostWithComments/PostWithComments';

const App = () => {
  return (
    <div className="App">
        <Nav/>
        <Switch>
            <Route path="/posts" exact component={Posts}/>  
            <Route path="/users" exact component={Users}/>
            <Route 
                path="/posts/id=:id/category=comments" 
                render={(props) => (
                  <PostWithComments {...props}/>
              )}/>
            <Redirect from="/" exact to="/posts"/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
  );
}

export default App;
