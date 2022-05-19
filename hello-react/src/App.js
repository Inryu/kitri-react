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

  const clickButtonHandler = () => {
    //setWhomade('inryu✨');
    //배열에 상품 추가. (맨 앞에?!)
    setProducts(['애플워치', ...products]);

    setGreet({
      ...greet,
      shopName : '앵귤러 싫어요'
    })
  }

  return (
    <>
      <NewProduct/>
      <ShopHeader {...greet}/> 
      <ShopContent products={products}/>
      <ShopFooter whoMade={whoMade}/>
    </>
  );
}

export default App;
