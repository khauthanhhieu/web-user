import React, { Component } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import UpdateImage from '../UploadImage';
import Navbar from '../Navbar';

class Update extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
        <Card>
        <div className="container" style={{ marginTop: '50px', width: '700px' }}>
          <h2 style={{ marginBottom: '10px' }}>Cập nhật thông tin</h2>
          <form onSubmit={this.handleSubmit}>
          <UpdateImage />
            
            <div className="form-group" style={{ marginLeft: '10px', marginTop:'10px'}}>
              <span>Họ tên: </span>
              <input type="text" placeholder="Họ tên" name="name" />
            </div>
            
            <div className="form-group">
            <span>Email: </span>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
              <span>Địa chỉ: </span>
              <input type="text" placeholder="Địa chỉ" name="address" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" style={{ marginBottom: '100px' }}>
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </Card>
      </div>
      </div>
    );
  }
}

export default Update;
