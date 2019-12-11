import { Empty, Button } from 'antd';
import Header from '../Navbar';
import React, { Component } from 'react';

export default class CommentTab extends Component{
  render(){
    return (
      <div>
        <Header/>
        <div className="container" style={{ marginTop: '50px', width: '700px', height:'500px' }}>
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          imageStyle={{
            height: 60,
          }}
          description={
            <span>
              Customize <a href="#API">Description</a>
            </span>
          }
        >
          <Button type="primary">Create Now</Button>
        </Empty>
        </div>
        </div>
    );
  }
}