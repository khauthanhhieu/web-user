import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/HomeTeacher';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="App" 
            style={{  
              backgroundImage: `url(" + "./background/BGLogin.jpg" + ")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
        }}>
          <Navbar/>
          <Route exact path="/home" component={Home} />
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
