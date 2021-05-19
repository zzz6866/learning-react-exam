import logo from './logo.svg';
import './App.css';
import {Component} from "react";

/*
크롬 개발자도구 - react : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
개발자 도구 설치 후 에러 참고사항 - https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
*/
const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text: `일정 : ${index}`, done: false})
);

class App extends Component {
    state = {
        todos: initialTodos
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/PageTemplate.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
