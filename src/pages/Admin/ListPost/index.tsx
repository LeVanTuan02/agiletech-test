import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";

type Props = {};

const ListPost = (props: Props) => {
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
            className="max-w-full mb-[35px] font-inter w-[368px] h-[50px] outline-none border border-black rounded-[6px] bg-[#FDFDFD] px-[34px]"
            placeholder="Title"
          />

          <select
            name=""
            id=""
            className="max-w-full mb-[35px] font-inter w-[368px] h-[50px] ml-[43px] outline-none border border-black rounded-[6px] bg-[#FDFDFD] px-[34px]"
          >
            <option value="">Tags</option>
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
          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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

          <tr>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">1</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">ABC</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">Description</td>
            <td className="p-3 text-xl border border-black text-center bg-[#D9D9D9]">HTML, CSS</td>
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
        </tbody>
      </table>

      <div className="my-5">
        <Pagination />
      </div>
    </div>
  );
};

export default ListPost;
