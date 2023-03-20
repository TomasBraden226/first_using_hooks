import { useState, useEffect } from "react";

export default function Counter() {
    // Declare state variables
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState("Eggs");
    const [detail, setDetail] = useState("Eggs is good for your health.");
    useEffect(() => {
    	console.log(`${product} will rule the world!`);
    }, [product, detail]);
    return (
        <div>
        Current {product}'s count: {count}<br/>
        {detail}
            <div>
                <button onClick={() => setCount(count + 1)}>Add to cart</button>
                <button onClick={() => setCount(count - 1)}>Remove from cart</button>
                Change Product:{" "}
                <input type="text" onChange={(e) => setProduct(e.target.value)} />
                <input type="text" onChange={(e) => setDetail(e.target.value)} />
            </div>
        </div>
    );
}