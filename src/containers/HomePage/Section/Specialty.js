import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from "react-intl"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Specialty extends Component {
    render() {
        // let settings = {
        //     infinite: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 4
        // };
        return (
            <div className='wrapper-section wrapper-section-speciality'>
                <div className="section section-speciality">
                    <h3 className='header-section'>Chuyên khoa phổ biến</h3>
                    <Slider {...this.props.settings}>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg' className='img-speciality' />
                            <p>Cơ Xương Khớp</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg' className='img-speciality' />
                            <p>Khoa Thần Kinh</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg' className='img-speciality' />
                            <p>Tiêu Hoá</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg' className='img-speciality' />
                            <p>Tim Mạch</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg' className='img-speciality' />
                            <p>Tai Mũi Họng</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg' className='img-speciality' />
                            <p>Cột Sống</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg' className='img-speciality' />
                            <p>Y Học Cổ Truyền</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg' className='img-speciality' />
                            <p>Châm Cứu</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/16/181822-san-phu-khoa.jpg' className='img-speciality' />
                            <p>Sản Phụ Khoa</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/16/181619-sieu-am-thai.jpg' className='img-speciality' />
                            <p>Siêu Âm Thai</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w300/2019/12/16/175620-nhi-khoa.jpg' className='img-speciality' />
                            <p>Nhi Khoa</p>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
