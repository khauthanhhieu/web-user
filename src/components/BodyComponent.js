import React from 'react';
import Lession from './Courses/Lession';

class BodyComponent extends React.Component {

    render() {
        var courses = [
            {
                id: 1,
                name: "Hà Nội",
                image: "images/componentcity1.jpg"
            },
            {
                id: 2,
                name: "Đà Nẵng",
                image: "images/componentcity2.jpg"
            },
            {
                id: 3,
                name: "TP Hồ Chí Minh",
                image: "images/componentcity3.jpg"
            }
        ];

        return (
            <div className="componentcity">
                <div className="container">
                    <div className="row">
                        {
                            courses.map((course, index) => {
                                return (
                                    <Lession name={course.name} image={course.image} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyComponent;
