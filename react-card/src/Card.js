import { useState } from 'react';
import './Card.css';
import Label from './components/Label';
import Square from './components/Square';
function Card(props) {

  //const color = '#ff4400';
  const [color, setColor] = useState('#ffffff');
  
  const clickButtonHandler = () => {
    console.log('buton clicked...');
    setColor('#ff4455');
  }

  return (
    <>
    <div className='cardStyle'>
      <Square color={color}/>
      <Label color={color}/>
    </div>
    <div>
      <button onClick={clickButtonHandler} >색상 변경하기</button>
    </div>
    </>
  );
}

export default Card;
