import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
/*
shouldComponentUpdate 구현이 필요한 상황
- 컴포넌트 배열이 렌더링하는 리스트 컴포넌트일때
- 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일때
- 하위 컴포넌트 개수가 많으며, 리렌더링되지 말아야 할 상황에서도 리렌더링이 진행될때
*/
class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const {done, children, onToggle, onRemove} = this.props;
        /* 비구조화 할당을 통하여 this.props 안에 있는 done, children, onToggle, onRemove 에 대한 레퍼런스 생성 */
        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }
                }>[지우기]
                </div>
            </div>
        );
    }
}

export default TodoItem;