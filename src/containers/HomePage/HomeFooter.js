import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './HomeFooter.scss'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeFooter extends Component {

    render() {
        let settings = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <div className='home-footer'>
                <div className="home-footer-content">
                    <p>&copy; 2022 Chuyên Đề Cơ Sở, <a href=''>More Information please contact with group ...</a></p>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
