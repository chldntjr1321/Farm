import { useState } from 'react';
import './App.css';
import data from './data';
import Grass from './Grass';

function App() {
  const wave = '〰️ ';
  const [grassArr, setGrassArr] = useState(Array(10).fill(wave));

  const mouseIn = function () {
    const newArr = Array(10)
      .fill()
      .map(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex].emoji;
      });
    setGrassArr(newArr);
  };

  return (
    <div className="land">
      <div onMouseOver={mouseIn}>
        <Grass grassArr={grassArr} />
      </div>
    </div>
  );
}

function Plant() {}

export default App;
