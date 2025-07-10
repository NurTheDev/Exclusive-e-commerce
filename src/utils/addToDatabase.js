import { getDatabase, ref, set } from "firebase/database";
import {toast, Zoom} from "react-toastify";
import {TOAST_CONFIG} from "../constance/authConstance.js";

const addToWishList = async (product)=> {
    try {
        const db = getDatabase();
        await set(ref(db, `wishList/${product.id}`), product);
        toast.success(`Added to wishList`, {...TOAST_CONFIG, transition: Zoom});
    }
    catch (error) {
        console.log("wishList removed", error)
    }
}
export {addToWishList}
