import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Đăng nhập</h3>

            <div className="form-group">
              <label>Địa chỉ email</label>
              <input type="email" className="form-control" placeholder="Nhập email" />
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập password" />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Lưu mật khẩu
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Đăng nhập
            </button>
            <p className="forgot-password text-right">
              Quên mật khẩu <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
