import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/authentication'

class Header extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onLogout();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">GIA SƯ TRỰC TUYẾN</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
          </form>
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? (
              <>
                {/* <li className="nav-item">
                  <a href="" className="nav-link">
                    <img src={user.avatar} alt={user.name} title={user.name}
                      className="rounded-circle"
                      style={{ width: '25px', marginRight: '5px' }} />
                    Xin chào {user.fullname.split(" ").slice(-1).pop()}
                  </a>
                </li> */}
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Xin chào {user.fullname.split(" ").slice(-1).pop()}
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <h3 class="text-center">{user.fullname}</h3>
                    <p class="text-center">{user.email}</p>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Thông tin cá nhân</a>
                    {isAuthenticated === "teacher" ? (
                      <>
                        <a class="dropdown-item" href="#">Khóa học đang giảng dạy</a>
                        <a class="dropdown-item" href="#">Doanh thu</a>
                      </>
                    ) : (
                      <>
                        <a class="dropdown-item" href="#">Khóa học đã đăng kí</a>
                      </>
                    )}
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" onClick={this.logout}>Đăng xuất</a>
                  </div>
                </li>
              </>
            ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">Đăng ký</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">Đăng nhập</Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
