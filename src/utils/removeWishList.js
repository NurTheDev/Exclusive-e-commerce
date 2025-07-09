import { remove, ref, getDatabase } from "firebase/database";
import {toast, Zoom} from "react-toastify";
import {TOAST_CONFIG} from "../constance/authConstance.js";

const removeWishList = async (product)=> {
    const db = getDatabase();
    remove(ref(db, `wishList/${product.id}`)).then(() => {
        toast.success(`Removed from wishList`, {...TOAST_CONFIG, transition: Zoom});
    }).catch((error) => {
        console.log("wishList removed", error)
    })
}
export default removeWishList
