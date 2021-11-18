import { useContext } from 'react';
import { SliderState, SliderContext } from './state';
import { SliderRoot } from './root';
import { SliderItem } from './item';
import './index.css';

const MyCustomSliderControls = () => {
    const { onNext, onPrev, count, position, overflows } = useContext(SliderContext);

    if (overflows) {
        return <div>
            <button disabled={position === 0} onClick={onPrev} type="button">{"<<"}</button>
            <button disabled={position === count - 1} onClick={onNext} type="button">{">>"}</button>
        </div>;
    }

    return null
}

export const MySlider = () => {
    return <SliderState>
        <MyCustomSliderControls />
        <SliderRoot>
            <SliderItem uniq={0}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>0</div>
            </SliderItem>
            <SliderItem  uniq={1}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>1</div>
            </SliderItem>
            <SliderItem  uniq={2}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>2</div>
            </SliderItem>
            <SliderItem  uniq={3}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>3</div>
            </SliderItem>
            <SliderItem uniq={4}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>0</div>
            </SliderItem>
            <SliderItem  uniq={5}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>1</div>
            </SliderItem>
            <SliderItem  uniq={6}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>2</div>
            </SliderItem>
            <SliderItem  uniq={7}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>3</div>
            </SliderItem>
            <SliderItem uniq={8}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>0</div>
            </SliderItem>
            <SliderItem  uniq={9}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>1</div>
            </SliderItem>
            <SliderItem  uniq={10}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>2</div>
            </SliderItem>
            <SliderItem  uniq={11}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>3</div>
            </SliderItem>
            <SliderItem uniq={12}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>0</div>
            </SliderItem>
            <SliderItem  uniq={13}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>1</div>
            </SliderItem>
            <SliderItem  uniq={14}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>2</div>
            </SliderItem>
            <SliderItem  uniq={15}>
                <div style={{ width: 400, height: 300, marginRight: 20, background: 'tomato', borderRadius: 20, padding: 20, boxSizing: 'border-box' }}>3</div>
            </SliderItem>
        </SliderRoot>
    </SliderState>
}