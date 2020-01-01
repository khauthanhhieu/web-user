import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import HomeStudent from './components/pages/HomeStudent';
import Footer from './components/Footer';
import store from './store';
import HomeTeacher from './components/pages/HomeTeacher';
import UserDetail from './components/pages/UserDetail';
import UpdateUser from './components/pages/UpdateUser';
import TeacherList from './components/pages/TeacherList';

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
          <Route exact path="/" component={HomeStudent} />
          <Route exact path="/teacherList" component={TeacherList} />
          <Route exact path="/hometeacher" component={HomeTeacher} />
          <Route exact path='/teacherInfo' component={UserDetail} />
          <Route exact path='/updateuser' component={UpdateUser} />

          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
