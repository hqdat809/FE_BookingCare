import MarkdownIt from 'markdown-it';
import React, { Component } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { connect } from 'react-redux';
import { CRUD_ACTIONS } from '../../../utils';
import Select from 'react-select';
import * as actions from "../../../store/actions";
import './ManageDoctor.scss';
import { getDetailInforDoctor } from '../../../services/userService';



const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listDoctor: [],
            hasOldData: false
        }
    }

    async componentDidMount() {
        this.props.fetchAllDoctors()

    }

    buildDataInputSelect = (inputData) => {
        let result = []
        let { language } = this.props.language
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                object.label = `${item.lastName} ${item.firstName}`
                object.value = item.id
                result.push(object)
            })
        }
        return result
    }

    // Finish!
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }

    handleOnChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctor: dataSelect
            })
        }
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state
        console.log('check state: ', this.state)
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        })
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedOption })

        let res = await getDetailInforDoctor(selectedOption.value)

        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false
            })
        }
        console.log('test user selected : ', this.state)
    };

    render() {
        return (
            <div className='manage-doctor-container'>
                <div
                    className='manage-doctor-title'
                >
                    Tạo thêm thông tin doctor
                </div>
                <div className='more-infor'>
                    <div className='content-left'>
                        <label>Chọn Bác Sĩ: </label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctor}
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thông tin giới thiệu của bác sĩ: </label>
                        <textarea
                            className='form-control'
                            rows="4"
                            onChange={(e) => this.handleOnChangeDesc(e)}
                            value={this.state.description}
                        >

                        </textarea>
                    </div>

                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor
                        value={this.state.contentMarkdown}
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                </div>

                <button
                    className={this.state.hasOldData === true ? 'save-content-doctor' : 'create-content-doctor'}
                    onClick={() => this.handleSaveContentMarkdown()}
                >
                    {this.state.hasOldData === true ? 'Lưu Thông Tin' : 'Tạo thông tin'}
                </button>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
