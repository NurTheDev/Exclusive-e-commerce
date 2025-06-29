import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
const ArrowGroup = ({ref}) => {
    return (
        <div className="absolute lg:-top-16 top-1/2 flex justify-between lg:justify-end w-full gap-2 z-10 ">
            <button
                onClick={() => ref.current?.slickPrev()}
                className="btn btn-circle  bg-secondaryColor hover:scale-105 hover:shadow-md  transition-colors text-lg"
            >
                <FaArrowLeft/>
            </button>
            <button
                onClick={() => ref.current?.slickNext()}
                className="btn btn-circle bg-secondaryColor hover:scale-105  transition-colors text-lg"
            >
                <FaArrowRight />
            </button>
        </div>
    );
}
export default ArrowGroup;
