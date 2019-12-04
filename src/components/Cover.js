import React from 'react';

class Cover extends React.Component {

    render() {
        return (
            <div className="cover">
                <div id="carouselcover" className="carousel slide carouselcover" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="images/coverimage1.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/coverimage2.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/coverimage3.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>

                <div className="container-fluid header">
                    <h1>HỌC-HỌC NỮA-HỌC MÃI !!!</h1>
                    <p>Cung cấp những kiến thức bổ ích thông qua những khoá học thú vị.<br/>
                    Trải nghiệm thôi nào
                    </p>
                    <div className="row searchbox">
                        <div className="col-md-6">
                            <input type="text" name="searchbox" placeholder="Tìm khoá học..." />
                        </div>
                        <div className="col-md-3">
                            <select name="selectbox" id="selectbox">
                                <option value="tunhien">Tự nhiên</option>
                                <option value="xahoi">Xã hội</option>
                                <option value="laptrinh">Lập trình</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-info">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
