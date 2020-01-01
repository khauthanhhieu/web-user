import React, { Component } from 'react';
import { WithContext } from 'react-tag-input';
import ReactDOM from 'react-dom';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class SignUp extends Component {
  constructor() {
    super()
    this.setState({ page: 0 })
    this.state = {
      tags: [
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" }
      ],
      suggestions: [
        { id: 'USA', text: 'USA' },
        { id: 'Germany', text: 'Germany' },
        { id: 'Austria', text: 'Austria' },
        { id: 'Costa Rica', text: 'Costa Rica' },
        { id: 'Sri Lanka', text: 'Sri Lanka' },
        { id: 'Thailand', text: 'Thailand' }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }
  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const { tags, suggestions } = this.state;

    const now = new Date()
    const defaultBirth = new Date(now.getFullYear() - 18, now.getMonth() + 1, now.getDate()).toISOString().substr(0, 10)

    const firstPage = (
      <>
        <div className="form-group">
          <label>Họ và tên</label>
          <input type="text" className="form-control" placeholder="Nguyễn Văn A" />
        </div>

        <div className="form-group">
          <label>Địa chỉ email</label>
          <input type="email" className="form-control" placeholder="abcxyz@gmail.com" />
        </div>

        <div className="form-group d-flex flex-column">
          <label className="p-2">Ngày sinh</label>
          <input className="p-2" type="date" defaultValue={defaultBirth}></input>
        </div>

        <div className="form-group d-flex flex-column">
          <label className="p-2">Giới tính</label>
          <select className="p-2">
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tên đăng nhập</label>
          <input type="text" className="form-control" placeholder="anguyen" />
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input type="password" className="form-control" />
        </div>

        <button type="button" className="btn btn-primary btn-block">
          Tiếp theo
        </button>
      </>
    )

    const addressPage = (
      <>
        <div className="form-group">
          <label>Địa chỉ</label>
          <select id="citySelect" class="form-control mb-3" >
            <option value="apple" selected>Tỉnh/Thành phố</option>
          </select>
          <select id="citySelect" class="form-control mb-3" >
            <option value="apple" selected>Quận/Huyện</option>
          </select>
          <select id="citySelect" class="form-control mb-3" >
            <option value="apple" selected>Xã/Phương</option>
          </select>
          <input type="text" className="form-control" placeholder="Số nhà, tên đường"></input>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Bạn là giảng viên?
            </label>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" className="btn btn-primary">
            Quay lại
        </button>
          <button type="button" className="btn btn-primary">
            Tiếp theo
        </button>
        </div>

      </>
    )

    const teacherPage = (
      <>
        <WithContext tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
      </>
    )

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Đăng ký</h3>

            {/* {firstPage} */}
            {/* {addressPage} */}
            {teacherPage}

            <button type="submit" className="btn btn-primary btn-block">
              Đăng ký
            </button>

            <p className="forgot-password text-right">
              Đã có tài khoản <a href="#">đăng nhập ?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
