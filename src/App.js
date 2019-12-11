import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import HomeStudent from './components/pages/HomeStudent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import store from './store';
import HomeTeacher from './components/pages/UserDetail';
import SelfIntroduce from './components/pages/SelfIntroduce';
import User from './components/pages/User';

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
          
          <Route exact path="/home" component={User} />
          <Route exact path="/hometeacher" component={HomeTeacher} />
          <Route exact path='/' component={SelfIntroduce} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
