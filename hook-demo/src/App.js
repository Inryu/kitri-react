import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect 실행됨");
    console.log(number);

    //clean up
    return(() => {
      console.log("useEffect 반환 함수!");
    });

  }, [number]); // 두 번째 인자가 없으면 리렌더링 될 때마다, 빈 배열이면 최초 마운트 시 , state값 추가 시 state가 변경시 수행

  const reRenderButtonClickHandler = () => {
    //setNumber(Math.floor(Math.random() * 100));
    const increasedNumber = number +1;
    setNumber(increasedNumber);
  }
  return (
    <div className='main-content'>
      <h1>📓 Todo List</h1>
      <button className='w-btn w-btn-green'
              onClick={reRenderButtonClickHandler}>화면 리렌더링
      </button>
      <ul>
        <li>집 청소</li>
        <li>마블 영화 정주행</li>
        <li>헬스</li>
      </ul>
      <h3>{number}</h3>
    </div>
  );
}

export default App;
