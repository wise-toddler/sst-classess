function ProductCard({title,price}){
    return (
        <div>
            <h2>Product Card</h2>
            <p>Product Card Description</p>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}
export default ProductCard;