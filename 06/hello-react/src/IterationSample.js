import {Component} from "react";

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    };

    // input 값 변화 이벤트
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    // 배열 값 추가
    handleInsert = () => {
        // names 배열에 concat 함수를 사용하여 값을 추가하고, name 값을 초기화 한다.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    // 배열 값 확인
    handlePrintArr = () => {
        console.log(this.state.names)
    }

    // input 값 제거
    handleRemove = (index) => {
        const {names} = this.state;

        // ... : ES6의 전개 연산자이다. ...뒤에 위치한 배열 값을 꺼내서 현재 배열에 복사를 한다.
        // 배열 내장 함수인 filter를 사용한다면 더 간단하게 작성이 가능하다.
        this.setState({
            names: [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length),
            ]

            // filter를 사용한 새 배열 생성 방법
            //names: names.filter((item, i) => i !==index)
        });
    }

    render() {
        // const numbers = [1, 2, 3, 4, 5];
        // const result = numbers.map(num => num * num);
        // console.log(result);


        // const names = ['눈사람', '얼음', '눈', '바람']; // state 이동
        // Warning: Each child in a list should have a unique "key" prop
        // => 컴포넌트 배열을 렌더링하게될 경우 어떤 원소가 변경이 되었는지 확인하기 위한 용도로 사용 됩니다.
        // => key가 없다면 가상DOM을 비교할때 리스트에서 순차적으로 비교하여 변경을 감지한다
        // => ex) key={name}
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            )
        );

        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <button onClick={this.handlePrintArr}>배열값 확인</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;