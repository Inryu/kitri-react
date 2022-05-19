const ShopContentList = (props) => {
    
    // 반복되는 컴포넌트를 효율적으로 보여주기 - map 함수 
    // 참고 https://chanhuiseok.github.io/posts/react-8/
    // https://ko.reactjs.org/docs/lists-and-keys.html
    // li를 식별할 수 있는 유일한 값 key가 필요함.

    if(props.products.length ===0){
        return (
            <ul>
                <li>상품이 없어요.</li>
            </ul>
        )
    }

    return(
        <ul>
            {
                props.products.map((product, index) => 
                    <li key={index}>{product}</li>
                )
            }
        </ul>
    );
}
export default ShopContentList;