import ProductCard from "./ProductCard";
function Products() 
{
    const products = [
        {title: "Product 1", price: 10},
        {title: "Product 2", price: 20},
        {title: "Product 3", price: 30},
        {title: "Product 4", price: 40},
    ];
    return (
        <div> 
            I am Products 
            {
                products.map((product) => 
                 <ProductCard title={product.title} price={product.price} />)
            }
        </div>
    );
}
export default Products;