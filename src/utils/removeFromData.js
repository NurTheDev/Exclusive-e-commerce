import { remove, ref, getDatabase } from "firebase/database";
import {toast, Zoom} from "react-toastify";
import {TOAST_CONFIG} from "../constance/authConstance.js";
const db = getDatabase();
const removeWishList = async (product)=> {
    remove(ref(db, `wishList/${product.id}`)).then(() => {
        toast.success(`Removed from wishList`, {...TOAST_CONFIG, transition: Zoom});
    }).catch((error) => {
        console.log("wishList removed", error)
    })
}
const removeCart = async (product)=> {
    remove(ref(db, `cart/${product.id}`)).then(() => {
        toast.success(`Removed from cart`, {...TOAST_CONFIG, transition: Zoom});
    }).catch((error) => {
        console.log("cart removed", error)
    })
}
export {removeWishList, removeCart}
