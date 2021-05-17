import React, { Component } from 'react';
/*
라이프사이클 메소드는 컴포넌트에 변화가 있을 경우에 실행된다.
DOM을 직접 수정해야하는 경우에 유용(라이브러리 포함)
*/
class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref 설정 초기화


    constructor(props, context) {
        super(props, context);

        console.log('init constructor !!');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('call getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log('init componentDidMount!!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('call shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('call componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('call getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('call componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('call render!!');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;