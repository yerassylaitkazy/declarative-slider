import { createContext, useState } from 'react';

const defaultContextValue = {
    position: 0,
    count: 0,
    overflows: false,
    onOverflows: () => {},
    onCount: () => {},
    onNext: () => {},
    onPrev: () => {}
};

export const SliderContext = createContext(defaultContextValue);

export const SliderState = props => {
    const { children } = props;
    const [count, onCount] = useState(0);
    const [position, onPosition] = useState(0);
    const [overflows, onOverflows] = useState(false);

    const handleOverflows = (_overflows) => {
        // onPosition(0);
        onOverflows(_overflows);
    }

    const handlePrev = () => {
        if (position > 0) {
            onPosition(position - 1);
        }
    };

    const handleNext = () => {
        if (position < count - 1) {
            onPosition(position + 1);
        }
    };

    return <SliderContext.Provider value={{ count, onCount, position, onNext: handleNext, onPrev: handlePrev, overflows, onOverflows: handleOverflows }}>
        {children}
    </SliderContext.Provider>;
};


