import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Pagination as PaginationType } from "../../models/post";

type PaginationProps = {
  data: PaginationType;
  path: string;
  onChangePage: (page: number) => void;
};

const Pagination = ({ data, path, onChangePage }: PaginationProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 justify-between sm:hidden"></div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {data.currentPage <= data.totalPage && data.currentPage >= 1 ? (
            <p className="text-sm text-gray-700">
              Hiển thị <span className="font-medium">{(data.currentPage - 1) * data.limit + 1}</span> -{" "}
              <span className="font-medium">
                {data.currentPage * data.limit > data.total ? data.total : data.currentPage * data.limit}
              </span>{" "}
              trong <span className="font-medium">{data.total}</span> kết quả
            </p>
          ) : (
            <p className="text-sm text-gray-700">
              Hiển thị <span className="font-medium">0</span> - <span className="font-medium">0</span> trong{" "}
              <span className="font-medium">0</span> kết quả
            </p>
          )}
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {data.currentPage > 1 && (
              <button
                onClick={() => onChangePage(data.currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
              </button>
            )}

            {Array.apply(null, new Array(data.totalPage)).map((_, index) => (
              <button
                onClick={() => onChangePage(index + 1)}
                key={index}
                className={`${
                  index + 1 === data.currentPage
                    ? "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
                } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20`}
              >
                {index + 1}
              </button>
            ))}

            {data.currentPage < data.totalPage && (
              <button
                onClick={() => onChangePage(data.currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
