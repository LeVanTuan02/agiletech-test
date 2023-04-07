import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { useSelector } from "react-redux";
import { getPosts, selectPaginationPost, selectPosts } from "../../../redux/postSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PostApi } from "../../../api/postApi";

type Props = {};

const ListPost = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch<any>();
  const posts = useSelector(selectPosts);
  const paginationPost = useSelector(selectPaginationPost);

  useEffect(() => {
    let params = {};
    title && (params = { ...params, title });
    tag && (params = { ...params, tags: tag });

    (async () => {
      dispatch(
        getPosts({
          page: currentPage,
          ...params,
        }),
      );
    })();
  }, [currentPage]);

  // get tags
  useEffect(() => {
    (async () => {
      const tagsPost = await PostApi.getTags();
      setTags(tagsPost);
    })();
  }, []);

  // search post
  useEffect(() => {
    setCurrentPage(1);

    let params = {};
    title && (params = { ...params, title });
    tag && (params = { ...params, tags: tag });

    (async () => {
      dispatch(getPosts(params));
    })();
  }, [title, tag]);

  return (
    <div>
      <div className="flex flex-wrap items-center">
        <Link
          to="/posts/add"
          className="mb-[35px] w-[252px] max-w-full h-[58px] flex items-center justify-center bg-primary rounded-[50px] font-bold text-white shadow-[0_5px_5px_rgba(75,93,104,0.1)] transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]"
        >
          Add new
        </Link>

        <form action="" className="flex flex-wrap items-center justify-end flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="max-w-full mb-[35px] font-inter w-[368px] h-[50px] outline-none border border-black rounded-[6px] bg-[#FDFDFD] px-[34px]"
            placeholder="Title"
          />

          <select
            name=""
            id=""
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="max-w-full mb-[35px] font-inter w-[368px] h-[50px] ml-[43px] outline-none border border-black rounded-[6px] bg-[#FDFDFD] px-[34px]"
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

      <table className="w-full table-fixed border border-collapse mb-[26px]">
        <thead>
          <tr>
            <th className="p-3 text-xl border border-black text-center bg-[#D9D9D9] font-normal">ID</th>
            <th className="p-3 text-xl border border-black text-center bg-[#D9D9D9] font-normal">Title</th>
            <th className="p-3 text-xl border border-black text-center bg-[#D9D9D9] font-normal">Description</th>
            <th className="p-3 text-xl border border-black text-center bg-[#D9D9D9] font-normal">Tags</th>
            <th className="p-3 text-xl border border-black text-center bg-[#D9D9D9] font-normal">Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts?.map((item, index) => (
            <tr key={index}>
              <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">
                {(paginationPost.currentPage - 1) * paginationPost.limit + ++index}
              </td>
              <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">{item.title}</td>
              <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">{item.description}</td>
              <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">
                {item.tags.map((tag) => tag).join(", ")}
              </td>
              <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">
                <div className="flex justify-center">
                  <button className="px-3 transition hover:opacity-50">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="px-3 transition hover:opacity-50">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-5">
        <Pagination data={paginationPost} onChangePage={setCurrentPage} path="/profile/posts" />
      </div>
    </div>
  );
};

export default ListPost;
