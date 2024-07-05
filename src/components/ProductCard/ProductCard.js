import { useRef } from 'react';
import './ProductCard.css';
import { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
function ProductCard({ title, price }) {
    console.log("product card rendered");
    let pRef = useRef();
    let iRef = useRef();
    let oRef = useRef();
    let [inputV, setInputV] = useState('class');
    const printPrince = () => {
        if (pRef.current.style.display === "none")
            pRef.current.style.display = "block";
        else
            pRef.current.style.display = "none";
    }
    // let old;
    const displayOutput = (e) => {
        setInputV(e.target.value);
    }
    return (
        <div className="product-card">
            <h2>Product Card</h2>
            <h3 onClick={printPrince}>{title}</h3>
            <p ref={pRef}>{price}</p>
            <input type='text' ref={iRef} onChange={displayOutput} value={inputV} />
            <p ref={oRef} >over here: {inputV} </p>
            <AddToCart />
        </div>
    )
}
export default ProductCard;