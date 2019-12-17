import React from 'react';
import Navbar from '../Navbar';
import BodyComponent from '../BodyComponent';
import Filter from '../Filter';

class TeacherList extends React.Component {
  render (){
    return (
      <div className="setbackground">
        <Navbar/>
        <Filter/>
        <h2>Danh sách giáo viên</h2>
        <BodyComponent/>
      </div>
    );
  }
 
}
export default TeacherList;
