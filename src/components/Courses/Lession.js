import React from 'react';
import { Link } from "react-router-dom";

class Lession extends React.Component {

    render() {
        var {name, image} = this.props;
        return (
            <div className="col-4">
                <Link to="">
                    <img src={image} alt="" />
                    <div className="citycontent">
                        <h3>{name}</h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Lession;
