import { useReducer } from 'react';

//reducer는 컴포넌트 바깥쪽.
function reducer(state,action){ //(현재상태, 상태 업데이트 정보)
    switch(action.type){
        case 'INCREMENT' :
            return {count : state.count +1};
        case 'DECREMENT' :
            return {count : state.count -1};
        default : 
            return state;
    }
}

function Counter(){
    //🌟 상태값 관리 useReducer
    const [status, dispatch] = useReducer(reducer, {
        count : 0,
    });
    const increaseNumber = () => dispatch({type : 'INCREMENT'}); //setNumber (dispatch)를 통해 reducer 호출
    const decreaseNumber = () => dispatch({type : 'DECREMENT'});
    return (
        <div>
            <button onClick={increaseNumber}>+</button>
            <button onClick={decreaseNumber}>-</button>
            <h3>{status.count}</h3>
        </div>

    );
}
export default Counter;