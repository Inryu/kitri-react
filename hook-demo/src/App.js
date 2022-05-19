import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List';

function App() {
  const [todos,setTodos] = useState([{}]);
  const fetchTodosFromFakeServer = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
          //console.log(res.data);
          setTodos(res.data);
        })
        .catch((error)=>{
          console.log(error);
        });
  };
  useEffect(() => {
    fetchTodosFromFakeServer();
  },[]); //최초 로딩될 때 한 번만 가져오기.

  const onRefreshButtonClickHandler = () => {
    fetchTodosFromFakeServer();
  }

  /*
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
    //const increasedNumber = number +1;
    setNumber(prev => prev +1 ); //setter의 파라미터를 함수로 받을 때 인자는 기존의 값.
  }
  */
  return (
    <>
      <h1>Todo List 📓</h1>
      <button onClick={onRefreshButtonClickHandler}>다시 가져오기</button>
      <List todos={todos}/>
    </>
  );
}

export default App;
