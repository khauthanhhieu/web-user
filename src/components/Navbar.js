import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {

  render() {
    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/contact">Cập nhật thông tin</Link>
                    <Link className="dropdown-item" to="/about">Đăng xuất</Link>
                </div>
            </li>
        </ul>
        )
      
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/sign-up">Đăng ký</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/sign-in">Đăng nhập</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">GIA SƯ TRỰC TUYẾN</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { guestLinks}
                </div>
            </nav>
        )
    }
}

export default Navbar;