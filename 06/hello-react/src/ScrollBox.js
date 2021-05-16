import {Component} from "react";


class ScrollBox extends Component {
    /*
    DOM에 직접 접근할때엔 ref를 사용한다. 그러나 ref를 사용하지 않고 구현 가능한지 고려후에 사용해야 스파게티 코드를 방지할 수 있다.
    다른 컴포넌트끼리 데이터를 교류할때도 사용을 금한다.
    */

    scrollToBottom = () => {
        /*
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;

        위 두줄의 코드를 비구조화 할당 문법으로 선언한것이다.
        */
        const {scrollHeight, clientHeight} = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref
                }}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;