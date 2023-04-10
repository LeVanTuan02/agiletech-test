import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { updateTitle } from "../../../utils";
import classNames from "classnames/bind";
import styles from "./ListPost.module.css";
import { Pagination as PaginationPost, PostParams } from "../../../models/post";
import { PostApi } from "../../../api/postApi";
import { Post } from "../../../models/post";

const cx = classNames.bind(styles);

type Props = {};

const ListPost = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [pagination, setPagination] = useState<PaginationPost>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let params = {};
    title && (params = { ...params, title });
    tag && (params = { ...params, tags: tag });

    (async () => {
      getPosts({
        page: currentPage,
        ...params,
      });
    })();
  }, [currentPage]);

  // get tags
  useEffect(() => {
    updateTitle("Quản lý bài viết");

    (async () => {
      const tags = await PostApi.getTags();
      setTags(tags);
    })();
  }, []);

  // search post
  useEffect(() => {
    setCurrentPage(1);

    let params = {};
    title && (params = { ...params, title });
    tag && (params = { ...params, tags: tag });

    (async () => {
      getPosts(params);
    })();
  }, [title, tag]);

  const getPosts = async (params?: PostParams) => {
    const { posts, ...rest } = await PostApi.getPosts(params);
    setPagination({
      total: rest.total,
      totalPage: rest.total_page,
      currentPage: rest.current_page,
      limit: rest.page_size,
    });
    setPosts(posts);
  };

  const handleRemovePost = (id: string) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa bài viết?",
      text: "Không thể hoàn tác sau khi xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const idPost = await PostApi.removePost(id);
        setPosts((prev) => prev.filter((item) => item.id !== idPost));
        Swal.fire("Thành công!", "Đã xóa bài viết", "success");
      }
    });
  };

  return (
    <div>
      <div className={cx("heading")}>
        <Link to="/profile/posts/add" className={`btn btn-has-shadow ${cx("heading__btn")}`}>
          Add new
        </Link>

        <form action="" className={cx("heading__form")}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={cx("heading__form-control")}
            placeholder="Title"
          />

          <select
            name=""
            id=""
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className={cx("heading__form-control")}
          >
            <option value="">Tags</option>
            {tags.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </div>

      <table className={cx("table")}>
        <thead>
          <tr>
            <th className={cx("th")}>ID</th>
            <th className={cx("th")}>Title</th>
            <th className={cx("th")}>Description</th>
            <th className={cx("th")}>Tags</th>
            <th className={cx("th")}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts?.map((item, index) => (
            <tr key={index}>
              <td className={cx("td")}>{(pagination!.currentPage - 1) * pagination!.limit + ++index}</td>
              <td className={cx("td")}>{item.title}</td>
              <td className={cx("td")}>{item.description}</td>
              <td className={cx("td")}>{item.tags.map((tag) => tag).join(", ")}</td>
              <td className={cx("td")}>
                <div className={cx("table-actions")}>
                  <Link to={`/profile/posts/${item.id}/${item.title}/update`} className={cx("table-action")}>
                    <FontAwesomeIcon icon={faPen} />
                  </Link>
                  <button onClick={() => handleRemovePost(item.id)} className={cx("table-action")}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={cx("pagination")}>
        <Pagination data={pagination} onChangePage={setCurrentPage} />
      </div>
    </div>
  );
};

export default ListPost;
