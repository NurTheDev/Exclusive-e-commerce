const addToCart = async (userId, productId, quantity) => {
    try {
        const response = await fetch(`'https://dummyjson.com/carts/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                productId: productId,
                quantity: quantity || 1,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
const addToWishlist = async (userId, productId) => {
    try {
        const response = await fetch(`'https://dummyjson.com/carts/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                productId: productId,
                quantity: 1,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
export {addToCart};
