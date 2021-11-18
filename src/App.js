import logo from './logo.svg';
import './App.css';
import { MySlider } from './slider';

function App() {
  return (
    <div style={{ width: "100%", height: 1000, background: "grey" }}>
      <div style={{ marginBottom: 20 }}>
        <MySlider />
      </div>
      <div style={{ marginBottom: 20 }}>
        <MySlider />
      </div>
    </div>
  );
}

export default App;
