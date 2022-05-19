const ShopHeader = (props) => {    
    return (
        <h1>{props.shopName} 쇼핑몰에 오신 것을 {props.message}합니다.</h1>
    );
}

export default ShopHeader;