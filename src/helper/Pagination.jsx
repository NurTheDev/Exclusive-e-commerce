import React from 'react';

const Pagination = ({setPage, page, totalItems, itemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage || 1);
    return (
        <>
        {totalItems > itemsPerPage && (
            <div className={`join flex justify-center items-center w-full lg:gap-x-1 gap-x-1`}>
                <button
                    className="join-item btn btn-square !px-8"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`join-item btn-square btn ${page === i + 1 ? 'bg-secondary2 text-white' : ''}`}
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="join-item btn btn-square !px-8"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        )}</>
    );
};

export default Pagination;
