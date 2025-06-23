import React from 'react';

const Status = () => {
    return (
        <div className={"bg-black text-white flex justify-end"}>
            <div className={"max-w-2/3 flex items-center justify-between"}>
               <div className={"flex gap-x-2 p-2"}>
                   <p>
                       Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                   </p>
                   <button className={"small-text font-semibold underline cursor-pointer"}> Shop Now</button>
               </div>

            </div>
        </div>
    );
};

export default Status;
