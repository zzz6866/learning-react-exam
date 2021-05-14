// import './App.css';
import React, {Component} from "react";
import MyComponent from './MyComponent'; // 컴포넌트 불러오기


class App extends Component {
    render() {
        return (
            <MyComponent name="React TEST" age={11}/>
        );
    }
}

export default App;
