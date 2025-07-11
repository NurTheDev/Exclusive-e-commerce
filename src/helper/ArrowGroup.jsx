import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
const ArrowGroup = ({ref, className}) => {
    return (
        <div className={`flex justify-between lg:justify-end w-full gap-2 z-10 ${className}`}>
            <button
                onClick={() => ref.current?.slickPrev()}
                className="btn btn-circle  bg-secondaryColor hover:scale-105 hover:shadow-md  transition-colors text-lg hover:bg-black/70 hover:text-white"
            >
                <FaArrowLeft/>
            </button>
            <button
                onClick={() => ref.current?.slickNext()}
                className="btn hover:bg-black/70 hover:text-white btn-circle bg-secondaryColor hover:scale-105  transition-colors text-lg"
            >
                <FaArrowRight />
            </button>
        </div>
    );
}
export default ArrowGroup;
