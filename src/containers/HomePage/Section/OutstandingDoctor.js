import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutstandingDoctor extends Component {

    render() {
        // let settings = {
        //     infinite: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 4
        // };
        return (
            <div className='wrapper-section wrapper-section-outstanding-doctor'>
                <div className="section section-outstanding-doctor">
                    <h3 className='header-section'>Bác sĩ nổi bật tuần qua</h3>
                    <Slider {...this.props.settings}>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg' className='img-speciality' />
                            <p>Trung tâm tham vấn, trị liệu Tâm lý MindCare Việt Nam</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Phòng khám Đa khoa Quốc tế Golden Healthcare</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Viện Tư vấn Tâm lý SunnyCare</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bệnh viện Thanh Nhàn</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Phòng Khám ACC - Chiropractic Quận 1 TP.HCM</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                        <div>
                            <img src='https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg' className='img-speciality' />
                            <p>Bác sĩ: ...</p>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
