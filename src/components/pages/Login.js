import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication'

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    this.props.onLogin(data.get('username'), data.get('password'), data.get('role')).then(() => {
      //this.props.history.push('/');
    });
  }

  render() {
    //const { errors } = this.state;
    return (
    <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}> 
            <h3>Đăng nhập</h3>

            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Nhập username" />
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" id="password" name="password" className="form-control" placeholder="Nhập password" />
            </div>
            <div className="form-group d-flex justify-content-between">
              <label>Vai trò</label>
              <select id="role" name="role" class="col-sm-8">
                <option value="student" selected>Người học</option>
                <option value="teacher">Người dạy</option>
              </select>
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
              <a href="#">Quên mật khẩu ?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (username, password, role) => dispatch(actions.login(username, password, role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
