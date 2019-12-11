import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/home');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user);
  }

  render() {
    const { errors } = this.state;
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
