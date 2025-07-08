const addToCart = async (userId, productId, quantity) => {
    try {
        const response = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                products: [
                    {
                        id: productId,
                        quantity: quantity || 1,
                    }
                ]
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

const addToWishlist = async (userId, productId) => {
    try {
        const response = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                products: [
                    {
                        id: productId,
                        quantity: 1,
                    }
                ]
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        throw error;
    }
};

export { addToCart, addToWishlist };
