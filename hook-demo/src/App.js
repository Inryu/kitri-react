import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List';

function App() {
  // 데이터를 서버에서 가져올 때 상태값은 3가지를 가지는 것이 좋음
  const [todos,setTodos] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  /* 1️⃣promise 방식 
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
  */
  /* 2️⃣async & await 방식 */
  const fetchTodosFromFakeServer = async () => {
    try{
      setLoading(true);
      // async & await : 비동기 . 결과가 담길 때까지 다음 라인을 진행하지 않음. (?)
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
      setTodos(res.data);
      console.log('fetch ok..');
    } catch(error){
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTodosFromFakeServer();
  },[]); //최초 로딩될 때 한 번만 가져오기.

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

  /* 조건부 렌더링*/
  if(loading) return <div>로딩중..</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!todos) return null;

  return (
    <>
      <h1>Todo List 📓</h1>
      <button onClick={fetchTodosFromFakeServer}>다시 가져오기</button>
      <List todos={todos}/>
    </>
  );
}

export default App;
