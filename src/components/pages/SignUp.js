import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Đăng ký</h3>
            <div className="form-group">
              <label>Tên</label>
              <input type="text" className="form-control" placeholder="Nhập tên" />
            </div>

            <div className="form-group">
              <label>Họ</label>
              <input type="text" className="form-control" placeholder="Nhập họ" />
            </div>

            <div className="form-group">
              <label>Địa chỉ email</label>
              <input type="email" className="form-control" placeholder="Nhập email" />
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập password" />
            </div>

            <div className="form-group">
              <label>Nhập lại mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập lại password" />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Bạn là giảng viên?
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Đăng ký
            </button>
            <p className="forgot-password text-right">
              Đã có tài khoản <a href="#">đăng nhập?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
