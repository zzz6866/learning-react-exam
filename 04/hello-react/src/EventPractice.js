import React, {Component} from "react";

class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }

    /*constructor(props) { // 새 메소드를 만들때마다 수정해야하기 때문에 불편할 수 있다.
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleClick() {
        alert("message : " + this.state.message);
        this.setState({
            message: ''
        })
    }*/

    // input 변경 이벤트 핸들링
    handleChange = (e) => { // constructor를 거치지 않고 메소드 생성(transform-class-properties 문법)
        console.log({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value // 여러개 input 핸들링
        })
    }

    // input 클릭 이벤트 핸들링
    handleClick = () => { // constructor를 거치지 않고 메소드 생성(transform-class-properties 문법)
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        })
    }

    // input 키를 누르는 이벤트 핸들링
    handleKeyPress = (e) => {
        if (e.key === 'Enter')
            this.handleClick()
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                <input
                    type="text"
                    name="message"
                    placeholder="입력"
                    value={this.state.message}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인
                </button>
            </div>
        );
    }
}

export default EventPractice