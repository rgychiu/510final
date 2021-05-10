import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './styles/index.css';
import App from './App';
import AllMovies from './AllMovies';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Layout id="navbar">
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key='2'><Link to='/all'>All Movies</Link></Menu.Item>
      </Menu>
    </Layout>

    <Switch>
      <Route path="/all">
        <AllMovies />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
