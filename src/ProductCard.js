import { useRef } from 'react';
import './ProductCard.css';
function ProductCard({ title, price }) {
    let pRef = useRef();
    const printPrince = () => {
        if (pRef.current.style.display === "none")
            pRef.current.style.display = "block";
        else
            pRef.current.style.display = "none";
    }
    return (
        <div className="product-card">
            <h2>Product Card</h2>
            <h3 onClick={printPrince}>{title}</h3>
            <p ref={pRef}>{price}</p>
        </div>
    )
}
export default ProductCard;