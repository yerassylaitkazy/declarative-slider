import { useContext, useRef, useEffect } from 'react';
import { SliderContext } from './state';

const getPositionX = el => {
    return el.offsetLeft;
}

export const SliderItem = props => {
    const { children, uniq } = props;
    const { position, count, overflows } = useContext(SliderContext);
    const itemRef = useRef();

    useEffect(() => {
        if (overflows && position === uniq) {
            const parentElement = itemRef.current.parentElement;
            const scrollableElement = itemRef.current;
            const diff = getPositionX(scrollableElement) - getPositionX(parentElement);
            parentElement.scroll({ left: diff, behavior: "smooth" })
        }
    }, [count, position, overflows]);

    return <div position-attribute={uniq} ref={itemRef} className="slider--item">{children}</div>;
};