import React, {Component} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'set Default name'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 지정
        age: PropTypes.number.isRequired // 숫자지정에 필수값 지정(값이 없으면 콘솔에 에러가 나옴)
    }


    /*constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }*/
    state = {
        number: 0
    }

    render() {
        /* props : properties의 줄인 표현으로 컴포넌트 속성을 설정할때 사용한다. ex) <MyComponent name="React TEST"/> */
        return (
            <div>
                컴포넌트 만들기
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>제 나이는 {this.props.age}살 입니다.</p>
                <p>state 숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }
                }>더하기
                </button>
            </div>
        );
    }
}

/* defaultProps, propTypes 는 컴포넌트 설정의 필수 사항은 아니지만 프로젝트내에서의 협업과 개발 능률에 도움이 된다.*/
/*MyComponent.defaultProps = {
    name : 'set Default name' // defaultProps는 props 변수를 지정하지 않을 경우 빈값으로 표현되는걸 방지하기 위한 기본 설정값이다.
}*/
/*MyComponent.propTypes = {
    name : PropTypes.string // name props 타입을 문자열로 지정
}*/

export default MyComponent;
