import React from 'react';

class Filter extends React.Component {

    render() {
        return (
            <div className="coverteacher">
                <marquee><h2>HỌC-HỌC NỮA-HỌC MÃI</h2><span>Hãy cùng chúng tôi đến với thành công của bạn.</span></marquee>
                <div className="container-fluid headerteacher">
                    <div className="row searchboxteacher">
                        <div className="col-md-6">
                            <input type="text" name="searchboxteacher" placeholder="Tìm khoá học..." />
                        </div>
                        <div className="col-md-3">
                            <select name="selectbox" id="selectbox">
                                <option value="address">Địa điểm</option>
                                <option value="time">Giờ</option>
                                <option value="skill">Kỹ năng</option>
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

export default Filter;
