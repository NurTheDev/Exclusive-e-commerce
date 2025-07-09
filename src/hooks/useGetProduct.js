import { getDatabase, ref, onValue } from "firebase/database";
import {useEffect, useState} from "react";
const useGetProduct = (path) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const db = getDatabase();
    const productRef = ref(db, path);
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onValue(productRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [path]);

    return {product, loading};
}

export default useGetProduct;
