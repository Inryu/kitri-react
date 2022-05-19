import { useState } from 'react';
import NewProduct from './components/new-product/NewProduct';
import ShopContent from './components/shop-content/ShopContent';
import ShopFooter from './components/ShopFooter';
import ShopHeader from './components/ShopHeader';
const App = () => {
  const [greet, setGreet] = useState({
    shopName : '리액트',
    message : '환영',
  });
  const [whoMade, setWhomade] = useState('kitri');
  const [products, setProducts] = useState([]);

  /*
  const clickButtonHandler = () => {
    //setWhomade('inryu✨');
    //배열에 상품 추가. (맨 앞에?!)
    setProducts(['애플워치', ...products]);

    setGreet({
      ...greet,
      shopName : '앵귤러 싫어요'
    })
  }
  */

  // NewProduct 컴포넌트 폼에서 입력하고 submit했을 때 아버지인 App.js로 product를 전달하기 위함.
  // NewProduct 한테 함수를 props로 전달.
  // ShopContentList 자식의 props 인 products를 변경해야 함.
  const addProductFromNewProduct = product => {
      //console.log(product);
      if(product !== ''){
        setProducts([product, ...products]); 
      }else{
        alert('상품명을 입력해주세요.');
      }
  }
  return (
    <>
      <NewProduct onProductAdd = {addProductFromNewProduct} />
      <ShopHeader {...greet}/> 
      <ShopContent products={products}/>
      <ShopFooter whoMade={whoMade}/>
    </>
  );
}
export default App;
