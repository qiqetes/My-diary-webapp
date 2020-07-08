import React, { Component } from 'react'
import './DiaryPage.scss'

export default class DiaryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryTextArea: undefined,
            diaryinput: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let el = document.getElementById("diaryinput");
        this.setState({ diaryTextArea: el });
        console.log(el)
    }
    handleChange(event) {
        this.setState({ diaryinput: event.target.value })
        let el = this.state.diaryTextArea;
        console.log(el.scrollHeight, el.clientHeight)
        el.style.height = (el.scrollHeight >= el.clientHeight) ? (el.scrollHeight) + "px" : "60px";
    }

    render() {
        return (
            <div className="Diary-page container">
                <div className="col justify-content-md-start justify-content-center">
                    <div className="day-title">
                        <h1 style={{ fontStyle: "italic" }} >
                            {this.props.dayN + 1}
                            {(this.props.dayN + 1 === 1 && 'st ') || (this.props.dayN + 1 === 2 && 'nd ') || (this.props.dayN + 1 === 3 && 'rd ') || 'th '}
                             of {this.props.month}</h1>
                    </div>
                    <div className="col diary-entries">

                        <div className="row">
                            <textarea name="" placeholder="Text here..." id="diaryinput" value={this.state.value} onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
