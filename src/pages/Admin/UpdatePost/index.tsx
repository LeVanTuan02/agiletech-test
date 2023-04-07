import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updatePost, getPosts, getTags } from "../../../redux/postSlice";
import { useSelector } from "react-redux";
import { selectTags } from "../../../redux/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../../models/post";

type UpdatePostProps = {};

interface InputsType {
  title: string;
  description: string;
}

const schema = yup.object().shape({
  title: yup.string().required("Vui lòng nhập tiêu đề bài viết"),
  description: yup.string().required("Vui lòng nhập mô tả bài viết"),
});

const UpdatePostPage = ({}: UpdatePostProps) => {
  const dispatch = useDispatch<any>();
  const tags = useSelector(selectTags);
  const [listTag, setListTag] = useState<string[]>([]);
  const { id, title } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsType>({ resolver: yupResolver(schema) });

  // get tags
  useEffect(() => {
    (async () => {
      dispatch(getTags());

      // chưa có API detail post
      const data = await dispatch(
        getPosts({
          title,
        }),
      ).unwrap();

      const post = data.posts.find((item: Post) => item.id === id);
      reset(post);
      setListTag(post.tags);
    })();
  }, []);

  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    try {
      await dispatch(
        updatePost({
          id: id as string,
          ...data,
          tags: listTag,
        }),
      ).unwrap();
      toast.success("Cập nhật bài viết thành công");
      navigate("/profile/posts");
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  const handleCheckTag = (tag: string) => {
    setListTag((prev) => {
      const isChecked = prev.includes(tag);

      if (!isChecked) {
        return [...prev, tag];
      } else {
        return prev.filter((item) => item !== tag);
      }
    });
  };

  return (
    <div>
      <h1 className="font-medium text-2xl uppercase text-center block mb-10">Cập nhật bài viết</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="form__add-post-title" className="block font-medium text-gray-700">
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            {...register("title")}
            id="form__add-post-title"
            className="py-2 px-3 mt-1 border focus:ring-primary focus:border-primary focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập tiêu đề bài viết"
          />
          <span className="text-sm mt-2 text-red-500">{errors.title?.message}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="form__add-post-desc" className="block font-medium text-gray-700">
            Mô tả bài viết
          </label>

          <textarea
            rows={10}
            {...register("description")}
            id="form__add-post-desc"
            className="py-2 px-3 mt-1 border focus:ring-primary focus:border-primary focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập tiêu đề bài viết"
          ></textarea>
          <span className="text-sm mt-2 text-red-500">{errors.description?.message}</span>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">Tags</legend>
          {tags.map((item, index) => (
            <div className="space-y-6" key={index}>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id={item}
                    checked={listTag.includes(item)}
                    onChange={() => handleCheckTag(item)}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor={item} className="font-medium text-gray-900">
                    {item}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </fieldset>

        <button
          type="submit"
          className="mt-5 ml-auto block py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cập nhật bài viết
        </button>
      </form>
    </div>
  );
};

export default UpdatePostPage;
