import React, { Component } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Row,
  Col,
} from 'reactstrap';
import '../../assets/demo/demo.css';
import Navbar from '../Navbar';

class UserDetail extends Component {
  render() {
    return (
      <>
        <div className="content setbackground">
          <Navbar/>
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require('../../assets/img/logo-small.png')}
                      />
                      <h5 className="title">Nguyễn Văn A</h5>
                    </a>
                    <p className="description">Lập trình viên</p>
                  </div>
                  <p className="description text-center">
                    Thích gì ghi nấy đây là mô tả <br />
                    
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          <small></small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          
                          <small></small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          <small></small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Thông tin người dạy</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <span>Họ tên: </span>
                      <Col className="px-1" md="3">
                        <label>Nguyễn Văn A</label>
                      </Col>
                    </Row>
                    <Row>
                      <span>Địa chỉ: </span>
                      <Col className="pr-1" md="3">
                      <label>Nguyễn Văn A</label>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
    </>
    );
  }
}

export default UserDetail;
