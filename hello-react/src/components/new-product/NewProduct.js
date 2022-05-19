import { useState, useRef } from 'react';
const NewProduct = (props) => {
    const productButton = useRef(null);
    const [typedProduct, setTypedProduct] = useState('');


    const submitButtonHandler = (event) => {
        event.preventDefault(); //리프레시 하는 기본 기능을 막아버림.
        //setProducts([typedProduct, ...products]); //App.js에 있었을 때.
        //이제 입력한 상품을 아버지 (App) 에게 전달해야 한다. -> 아버지가 다른 자식에게 전달.
        // 🌟State 끌어 올리기.

        setTypedProduct(''); //text input 초기화
        //text input 포커스
        productButton.current.focus();
      }
    
      const inputChangeHandler = (event) => {
        //console.log(event.target.value); //evnet.target : input 태그
        setTypedProduct(event.target.value);
      }

    return (
        <form onSubmit={submitButtonHandler}>
            <input type="submit" value="상품 추가"></input><br/><br/>
            <label>상품명 : </label>
            <input 
                type="text" 
                ref={productButton} 
                value={typedProduct} 
                onChange={inputChangeHandler}>
            </input>
        </form>
    )
}
export default NewProduct;