import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Axios from 'axios';

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      page: 0,
      text: '',
      isTeacher: false,
      cities: [],
      districts: [],
      wards: [],
      skills: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.goNextPage = this.goNextPage.bind(this)
    this.goBackPage = this.goBackPage.bind(this)
    this.handleChangeRole = this.handleChangeRole.bind(this)
    this.handleChangeCity = this.handleChangeCity.bind(this)
    this.handleChangeDistrict = this.handleChangeDistrict.bind(this)
  }

  handleChangeCity(event) {
    event.preventDefault();

    const id = event.target.value;
    Axios.get(`/api/address/district?id=${id}`).then(res => res.data.districts).then(
      (districts) => this.setState({ districts, wards: [] })
    )
  }

  handleChangeDistrict(event) {
    event.preventDefault()

    const id = event.target.value;
    Axios.get(`/api/address/ward?id=${id}`).then(res => res.data.wards).then(
      (wards) => this.setState({ wards })
    )
  }

  componentDidMount() {
    console.log("mount")
    Axios.get('/api/address/city').then(res => res.data.cities).then(
      (cities) => this.setState({ cities })
    )
    Axios.get('/api/skill').then(res => res.data.skills).then(
      (skills) => this.setState({ skills })
    )
  }

  handleChangeRole() {
    const currRole = this.state.isTeacher
    this.setState({ isTeacher: !currRole })
  }
  handleChange(value) {
    this.setState({ text: value })
  }
  goNextPage() {
    const currPage = this.state.page;
    this.setState({ page: currPage + 1 })
  }
  goBackPage() {
    const currPage = this.state.page;
    this.setState({ page: currPage - 1 })
  }
  render() {
    console.log("render")
    const now = new Date()
    const defaultBirth = new Date(now.getFullYear() - 18, now.getMonth() + 1, now.getDate()).toISOString().substr(0, 10)
    const { page, isTeacher, cities, districts, wards, skills } = this.state;

    const btnNext = (
      <button type="button" className="btn btn-primary" onClick={this.goNextPage}>
        Tiếp theo
      </button>
    )
    const btnBlockNext = (
      <button type="button" className="btn btn-primary btn-block" onClick={this.goNextPage}>
        Tiếp theo
      </button>
    )

    const btnPre = (
      <button type="button" className="btn btn-light" onClick={this.goBackPage}>
        Quay lại
      </button>
    )

    const btnSubmit = (
      <button type="submit" className="btn btn-primary">
        Hoàn tất
      </button>
    )

    const firstPage = (
      <>
        <div className="form-group">
          <label>Họ và tên</label>
          <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Nguyễn Văn A" />
        </div>

        <div className="form-group">
          <label>Địa chỉ email</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="abcxyz@gmail.com" />
        </div>

        <div className="form-group d-flex flex-column">
          <label className="p-2">Ngày sinh</label>
          <input className="p-2" type="date" defaultValue={defaultBirth} id="birthday" name="birthday"></input>
        </div>

        <div className="form-group d-flex flex-column">
          <label className="p-2">Giới tính</label>
          <select className="p-2" id="gender" name="gender">
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        {btnBlockNext}
      </>
    )

    const addressPage = (
      <>
        <div className="form-group">
          <label>Tên đăng nhập</label>
          <input type="text" id="username" name="username" className="form-control" placeholder="anguyen" />
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>

        <div className="form-group">
          <label>Địa chỉ</label>
          <select id="city" name="city" className="form-control mb-3" onChange={this.handleChangeCity} >
            <option value="apple" selected>Tỉnh/Thành phố</option>
            {
              cities.map((e, key) => {
                return (<option key={key} value={e.ID}>{e.name}</option>)
              })
            }

          </select>
          <select id="district" name="district" className="form-control mb-3" onChange={this.handleChangeDistrict} >
            <option value="apple" selected>Quận/Huyện</option>
            {
              districts.map((e, key) => {
                return (<option key={key} value={e.ID}>{e.name}</option>)
              })
            }
          </select>
          <select id="ward" name="ward" className="form-control mb-3" >
            <option value="apple" selected>Xã/Phương</option>
            {
              wards.map((e, key) => {
                return (<option key={key} value={e.ID}>{e.name}</option>)
              })
            }
          </select>
          <input type="text" className="form-control" placeholder="Số nhà, tên đường"></input>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="isTeacher" checked={isTeacher} onChange={this.handleChangeRole} />
            <label className="custom-control-label" htmlFor="isTeacher">
              Bạn là giảng viên?
            </label>
          </div>
        </div>

        <div class="d-flex justify-content-around">
          {btnPre}
          {
            isTeacher ? btnNext : btnSubmit
          }

        </div>
      </>
    )

    const teacherPage = (
      <>
        <div className="form-group">
          <label>Chọn tag kĩ năng của bạn</label>
          <div class="container row">
            {
              skills.map((e, key) => {
                return (
                  <div className="custom-control custom-checkbox col-sm-4">
                    <input type="checkbox" className="custom-control-input" name="skills" id={e.tag} />
                    <label className="custom-control-label" htmlFor={e.tag}>
                      {e.name}
                    </label>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="form-group">
          <label>Tự giới thiệu về bản thân</label>
          <ReactQuill value={this.state.text} onChange={this.handleChange} />
        </div>

        <div class="d-flex justify-content-around">
          {btnPre}
          {btnSubmit}
        </div>
      </>
    )
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Đăng ký</h3>
            {
              page === 0 ? firstPage :
                page === 1 ? addressPage :
                  teacherPage
            }
            <p className="forgot-password text-right">
              Đã có tài khoản <a href="#">đăng nhập ?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
