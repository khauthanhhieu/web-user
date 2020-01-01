import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { logoutUser } from '../actions/authentication';
// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
          <img src={user.avatar} alt={user.name} title={user.name}
              className="rounded-circle"
              style={{ width: '25px', marginRight: '5px'}} />
              Logout
        </a>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/sign-up">Đăng ký</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sign-in">Đăng nhập</Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">GIA SƯ TRỰC TUYẾN</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
          </form>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { })(withRouter(Navbar));
