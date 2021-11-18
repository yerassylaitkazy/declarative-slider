import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const getPositionX = el => {
    return el.offsetLeft;
}

export const SliderItem = (props) => {
    const { position, uniq, children } = props;
    const itemRef = useRef();

    useEffect(() => {
        if (position === uniq) {
            const parentElement = itemRef.current.parentElement;
            const scrollableElement = itemRef.current;
            const diff = getPositionX(scrollableElement) - getPositionX(parentElement);
            parentElement.scroll({ left: diff, behavior: "smooth" })
        }
    }, [position, uniq]);

    return <div position-attribute={uniq} className="slider--item" ref={itemRef}>{children}</div>
}

export const SliderRoot = () => {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(0);
    const rootRef = useRef();

    
    useEffect(() => {
        const items = Array.from(rootRef.current.getElementsByClassName("slider--item")) || [];
        setCount(items.length);
    }, []);

    const handleNext = () => {
        if (start < (count - 1)) {
            setStart(start + 1);
        }
    };

    const handlePrev = () => {
        if (start > 0) {
            setStart(start - 1);
        }
    }

    return <div>
        <div>
            <button disabled={start === 0} onClick={handlePrev}>prev</button>
            <button disabled={start === count - 1} onClick={handleNext}>next</button>
        </div>
        <div ref={rootRef} className="slider--root">
            <SliderItem uniq={0} position={start}><div>0</div></SliderItem>
            <SliderItem uniq={1} position={start}><div>1</div></SliderItem>
            <SliderItem uniq={2} position={start}><div>2</div></SliderItem>
            <SliderItem uniq={3} position={start}><div>3</div></SliderItem>
            <SliderItem uniq={4} position={start}><div>4</div></SliderItem>
            <SliderItem uniq={5} position={start}><div>5</div></SliderItem>
            <SliderItem uniq={6} position={start}><div>6</div></SliderItem>
            <SliderItem uniq={7} position={start}><div>7</div></SliderItem>
            <div style={{ flex: 'none', width: 10000 }}></div>
        </div>
    </div>
};