import ShopContentList from './ShopContentList';
import ShopContentTitle from './ShopContentTitle';

const ShopContent = (props) => {

    //return 태그는 하나의 태그만 반환해야 함 (부모 오소가 하나) -> 
    // <> </> 공태그 : React.Fragment로 쓸데 없는 div 반복 방지
    return (
        <>
            <ShopContentTitle/>
            <ShopContentList products={props.products}/>
        </>
    );
}
export default ShopContent;