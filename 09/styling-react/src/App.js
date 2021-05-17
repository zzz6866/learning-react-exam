import {Component} from "react";
// import styles from './App.scss'
// import classNames from "classnames"; //styles 사용
// import classNames from "classnames/bind";

// const cx = classNames.bind(styles) // styles 생략가능

// import Button from './components/Button';
import StyledButton from "./components/StyledButton";

/*
* CSS Module 사용법*
create-react-app v1의 경우 config/webpack.config.dev.js 의 css-loader 를 수정해야 CSS 모듈을 사용할수 있었다.
그러나 V2에서는 파일명을 [filename].module.css 와 같이 지정하면 CSS Module 이 적용됩니다.
yarn eject 하지 않아도 됨(webpack)....
*/
// console.log(styles); // css 확인용

class App extends Component {
    render() {
        // const isBlue = true;
        return (
            /*<div className={styles.box}>
                단일 클래스
            </div>*/
            /*<div className={[styles.box, styles.blue].join(' ')}>
                다중클래스
            </div>*/
            /*<div className={classNames(styles.box, styles.blue)}>
                classNames 라이브러리 사용 (사용시 자동으로 공백을 넣어준다, join 사용 효과?
            </div>*/
            /*<div className={cx('box', 'blue')}>
                const cx = classNames.bind(styles) 를 활용한 더 간단한 예제
            </div>*/
            /*<div className={cx('box', {blue: isBlue})}>
                <div className={cx('box-inside')}/>

            </div>*/
            <div>
                <StyledButton>버튼</StyledButton>
            </div>
        )
    }
}

export default App;