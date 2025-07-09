import { getDatabase, ref, onValue } from "firebase/database";
import {useEffect, useState} from "react";
const useGetProduct=(path)=>{
    // const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const db = getDatabase();
    const productRef = ref(db, path);
    useEffect(() => {
        const unsubscribe = onValue(productRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
        });
        return () => {
            unsubscribe();
        };
    }, [path]);
    // setLoading(false);
    return {product};
}
export default useGetProduct
