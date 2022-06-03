import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import { getDetailInforDoctor } from '../../../services/userService'
import './DetailDoctor.scss'
class DetailDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detailDoctor: {}
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getDetailInforDoctor(id)
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
        }

    }
    render() {
        let detailDoctor = this.state.detailDoctor
        console.log(detailDoctor)
        return (
            <div className='detail-doctor-container'>
                <HomeHeader isShowBanner={false} />
                <div className='introduce-doctor'>
                    <div
                        className='introduce-content-left'
                        style={{ backgroundImage: `url(${detailDoctor.image})` }}
                    >
                    </div>
                    <div className='introduce-content-right'>
                        <h1 className='doctor-name'>Bác sĩ {` ${detailDoctor.lastName} ${detailDoctor.firstName}`}</h1>
                        <div className='doctor-description'></div>
                        {detailDoctor.Markdown && detailDoctor.Markdown.description
                            &&
                            <p>
                                {detailDoctor.Markdown.description}
                            </p>
                        }
                    </div>
                </div>
                {detailDoctor.Markdown && detailDoctor.Markdown.contentHTML
                    &&
                    <div
                        className='content-detail-doctor'
                        dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}
                    >
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
