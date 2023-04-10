import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../../models/post";
import { updateTitle } from "../../../utils";
import classNames from "classnames/bind";
import styles from "./UpdatePost.module.css";
import { PostApi } from "../../../api/postApi";

const cx = classNames.bind(styles);

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
  const [tags, setTags] = useState<string[]>([]);
  const [listTag, setListTag] = useState<string[]>([]);
  const { id, title } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsType>({ resolver: yupResolver(schema) });

  useEffect(() => {
    updateTitle("Cập nhật bài viết");

    (async () => {
      // chưa có API detail post
      const [tags, data] = await Promise.all([PostApi.getTags(), PostApi.getPosts({ title })]);

      const post = data.posts.find((item: Post) => item.id === id) as Post;
      setTags(tags);
      reset(post);
      setListTag(post.tags);
    })();
  }, []);

  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    try {
      await PostApi.updatePost({
        id: id as string,
        ...data,
        tags: listTag,
      });
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
      <h1 className={cx("title")}>Cập nhật bài viết</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("form-group")}>
          <label htmlFor="form__add-post-title" className={cx("form-label")}>
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            {...register("title")}
            id="form__add-post-title"
            className={cx("form-control")}
            placeholder="Nhập tiêu đề bài viết"
          />
          <span className={cx("error-message")}>{errors.title?.message}</span>
        </div>

        <div className={cx("form-group")}>
          <label htmlFor="form__add-post-desc" className={cx("form-label")}>
            Mô tả bài viết
          </label>

          <textarea
            rows={10}
            {...register("description")}
            id="form__add-post-desc"
            className={cx("form-control")}
            placeholder="Nhập tiêu đề bài viết"
          ></textarea>
          <span className={cx("error-message")}>{errors.description?.message}</span>
        </div>

        <div>
          <label className={cx("form-label")}>Tags</label>
          {tags.map((item, index) => (
            <div className={cx("checkbox-list")} key={index}>
              <div className={cx("checkbox-list-item")}>
                <div className={cx("checkbox-list-item-row")}>
                  <input
                    id={item}
                    checked={listTag.includes(item)}
                    onChange={() => handleCheckTag(item)}
                    type="checkbox"
                  />
                </div>
                <label htmlFor={item} className={cx("checkbox-list-item-text")}>
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className={cx("form-btn")}>
          Cập nhật bài viết
        </button>
      </form>
    </div>
  );
};

export default UpdatePostPage;
