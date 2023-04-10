import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination as PaginationType } from "../../models/post";
import classNames from "classnames/bind";
import styles from "./Pagination.module.css";

const cx = classNames.bind(styles);

type PaginationProps = {
  data: PaginationType;
  onChangePage: (page: number) => void;
};

const Pagination = ({ data, onChangePage }: PaginationProps) => {
  return (
    <div className={cx("pagination")}>
      <div className={cx("pagination__left")}>
        {data.currentPage <= data.totalPage && data.currentPage >= 1 ? (
          <p>
            Hiển thị <span>{(data.currentPage - 1) * data.limit + 1}</span> -{" "}
            <span>{data.currentPage * data.limit > data.total ? data.total : data.currentPage * data.limit}</span> trong{" "}
            <span>{data.total}</span> kết quả
          </p>
        ) : (
          <p>
            Hiển thị <span>0</span> - <span>0</span> trong <span>0</span> kết quả
          </p>
        )}
      </div>

      <div>
        <nav className={cx("pagination__right")} aria-label="Pagination">
          {data.currentPage > 1 && (
            <button onClick={() => onChangePage(data.currentPage - 1)} className={cx("pagination__right-first")}>
              <span className="sr-only">Previous</span>
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
          )}

          {Array.apply(null, new Array(data.totalPage)).map((_, index) => (
            <button
              onClick={() => onChangePage(index + 1)}
              key={index}
              className={`${
                index + 1 === data.currentPage ? cx("pagination__right-num-active") : cx("pagination__right-num-normal")
              } ${cx("pagination__right-num")}`}
            >
              {index + 1}
            </button>
          ))}

          {data.currentPage < data.totalPage && (
            <button onClick={() => onChangePage(data.currentPage + 1)} className={cx("pagination__right-last")}>
              <span className="sr-only">Next</span>
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
