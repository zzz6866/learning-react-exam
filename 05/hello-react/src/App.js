// import './App.css';
import React, {Component} from "react";
import ValidationSample from './ValidationSample';
import ScrollBox from "./ScrollBox"; // 컴포넌트 불러오기


class App extends Component {
    render() {
        return (
            <div>
                <ValidationSample/>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>아래로</button>
            </div>
        );
    }
}

export default App;
