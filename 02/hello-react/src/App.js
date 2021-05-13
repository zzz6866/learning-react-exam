import './App.css';
import {Component, Fragment} from "react";

class App extends Component {
    render() {
        const text1 = '정적 변수'; // 불변
        let text2 = '동적 변수'; // ES6이전에는 var 사용
        // let text2 = '동적 변수3333'; // 중복 선언 불가
        console.log(text2);
        if (true) {
            let text2 = '동적 변수2222';
            console.log(text2);
        }
        console.log(text2); // 출력 : 동적 변수 (if문에서 선언한건 적용 안됨, let과 const가 scope 함수가 아니기때문..)

        const condition = true;

        const style = {
            background:'gray',
            border: '1px solid black',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300) + 50,
            webkitTransform: 'all',
            MozTransition: 'all',
            msTransform: 'all'
        }

        return (
            /* 부모 요소를 감싸지 않으면 오류가 난다. DOM 비교시 효율을 위한 규칙 */
            <Fragment>
                <h1>{text1}</h1>
                <h2>{text2}</h2>
                <p>{condition/* DOM 출력 안됨*/}</p>
                <p>{condition ? '참이오' : '거짓이오'}</p>
                <p>{condition ? 'Show' : null}</p>
                <p>{condition && 'Show' /* &&의 조건부 렌더링 사용법 */}</p>

                <div style={style}>1</div>

                <div class="my-div">
                    <p>{condition ? '참이오' : '거짓이오'}</p>
                    <div style={style}>1</div>
                </div>
            </Fragment>
        );
    }
}

export default App;
