import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }

            if (data && data.errCode === 0) {
                // todo
                this.props.userLoginSuccess(data.user)
                console.log('login succes')
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <h3 className='col-12 text-center login-title'><b>Login</b></h3>
                        <div className='col-12 form-group row-user-name'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => { this.handleChangeUserName(event) }}
                            />
                        </div>
                        <div className='col-12 form-group row-password'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type={this.state.isShowPassword ? "text" : "password"}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => { this.handleChangePassword(event) }}
                                />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </span>

                            </div>

                        </div>
                        <div className='col-12 ' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 btn-login'>
                            <button
                                onClick={() => { this.handleLogin() }}
                            >
                                Login
                            </button>
                        </div>
                        <div className='col-12 login-forgot'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center login-more'>
                            <span>Or sign in with:</span>
                        </div>
                        <div className='col-12 login-icon'>
                            <i className="fab google fa-google-plus"></i>
                            <i className="fab twitter fa-twitter-square"></i>
                            <i className="fab facebook fa-facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
