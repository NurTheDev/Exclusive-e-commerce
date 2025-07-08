import React, {useEffect} from 'react';
import {addToCart} from "../../../../features/API/PostProductAPI.js";
const WishProductCard = () => {
    const [data, setData] = React.useState([]);
    console.log(data)
    useEffect(() => {
        const handleAddToCart = async () => {
            try {
                const result = await addToCart(10, 1, 5);
                setData(result);
                console.log(result);
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        };
        handleAddToCart().then(() => {
            // Additional actions after successful addition to cart
            console.log('Product added to cart successfully');
        }).catch((error) => {
            console.error('Error adding to cart:', error);
        });

        return () => {
            // Cleanup function
        };
    }, []);
    return(
        <div>
            <h1>WishProductCard</h1>
        </div>
    )
}
export default WishProductCard
