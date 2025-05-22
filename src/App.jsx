import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  let [idArr, setIdArr] = useState(Array(500).fill(0));
  let Hover = (i) => {
    let copyId = [...idArr];
    copyId[i] = Rand(1, 21);
    setIdArr(copyId);
  };

  return (
    <>
      {idArr.map((id, i) => {
        return (
          <span
            key={i}
            onMouseOver={() => {
              Hover(i);
            }}
          >
            {data[id].emoji}
          </span>
        );
      })}
    </>
  );
}

// 난수생성 함수(min <= random <= max)
function Rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
