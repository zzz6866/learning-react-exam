import React, {Component} from "react";

// class형 컴포넌트
// 라이프사이클, state 등을 사용하기 때문에 메모리 소모량이 큰 편이다(함수형에 비해서)
// 리액트는 state를 사용하는 개수를 최소화하는 것이 좋다.
class Hello extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

// function(함수)형 컴포넌트
/*function Hello(props) {
    return (
        <div>
            Hello {this.props.name}
        </div>
    );
}*/

// ES6 비구조화 할당 문법의 컴포넌트
/*const Hello = ({name}) => {
    return (
        <div>
            Hello {this.props.name}
        </div>
    );
};*/


export default Hello;