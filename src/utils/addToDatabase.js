import { getDatabase, ref, set, update } from "firebase/database";
import {toast, Zoom} from "react-toastify";
import {TOAST_CONFIG} from "../constance/authConstance.js";
import {product} from "../data/data.js";
import {c} from "vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf.js";
const db = getDatabase();
const addToWishList = async (product)=> {
    try {
        await set(ref(db, `wishList/${product.id}`), product);
        toast.success(`Added to wishList`, {...TOAST_CONFIG, transition: Zoom});
    }
    catch (error) {
        console.log("wishList removed", error)
    }
}
const addToCart = async (product)=>{
    try{
        await set(ref(db, `cart/${product.id}`), product);
        toast.success(`Added to cart`, {...TOAST_CONFIG, transition: Zoom});
    } catch (error){
        console.log("cart removed", error)
    }
}
const updateCart = async (product, quantity)=>{
    try{
        await update(ref(db, `cart/${product.id}`), {...product, quantity});
        toast.success(`Cart updated`, {...TOAST_CONFIG, transition: Zoom});
    } catch (error){
        console.log("cart removed", error)
    }
}
export {addToWishList, addToCart, updateCart}
