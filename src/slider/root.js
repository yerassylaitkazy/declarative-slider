import { useContext, useRef, useEffect } from 'react';
import { SliderContext } from './state';

const getElementWidth = element => {
    return element.offsetWidth;
}

export const SliderRoot = props => {
    const { children } = props;
    const { onCount, onOverflows, overflows } = useContext(SliderContext);
    const rootRef = useRef();

    useEffect(() => {
        if (rootRef.current) {
            const itemCount = Array.from(rootRef.current.getElementsByClassName("slider--item")).length;
            if (itemCount) {
                onCount(itemCount);
            } else {
                throw new Error("use SliderItem component!");
            }
        }
    }, []);

    useEffect(() => {
        const handler = () => {
            const items = Array.from(rootRef.current.getElementsByClassName("slider--item"));
            const rootWidth = getElementWidth(rootRef.current); 
            const allItemsWidth = items.reduce((accumulator, item) => {
                return accumulator + getElementWidth(item);
            }, 0);
            console.log(rootWidth, allItemsWidth);
            onOverflows(allItemsWidth > rootWidth);
        };

        window.addEventListener('resize', handler);
        handler();
    }, []);

    return <div ref={rootRef} className="slider--root">
        {children}
        {overflows && <div className="slider--end-spacer" />}
    </div>;
};