import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Pagination = () => {

    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <>
            <div className="w-full h-20 bg-gray-100 shadow-md flex items-center justify-center">

                <div>
                    {
                        page > 1 &&
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="font-semibold hover:bg-gray-400 py-2 px-3 text-xl bg-gray-300 rounded-md m-4"
                        >
                            Previous
                        </button>
                    }

                    {
                        page < totalPages &&
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="font-semibold hover:bg-gray-400 py-2 px-3 text-xl bg-gray-300 rounded-md m-4"
                        >
                            Next
                        </button>
                    }
                </div>

                <p> Page <span>{page}</span> of <span>{totalPages}</span> </p>

            </div>
        </>
    );
};

export default Pagination;