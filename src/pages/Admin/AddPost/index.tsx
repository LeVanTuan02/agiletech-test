import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateTitle } from "../../../utils";
import classNames from "classnames/bind";
import styles from "./AddPost.module.css";
import { PostApi } from "../../../api/postApi";

const cx = classNames.bind(styles);

type AddPostProps = {};

interface InputsType {
  title: string;
  description: string;
}

const schema = yup.object().shape({
  title: yup.string().required("Vui lòng nhập tiêu đề bài viết"),
  description: yup.string().required("Vui lòng nhập mô tả bài viết"),
});

const AddPost = ({}: AddPostProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [listTag, setListTag] = useState<string[]>([]);

  const navigate = useNavigate();

  // get tags
  useEffect(() => {
    updateTitle("Thêm bài viết");

    (async () => {
      const tags = await PostApi.getTags();
      setTags(tags);
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    try {
      await PostApi.addPost({
        ...data,
        tags: listTag,
      });
      toast.success("Thêm bài viết thành công");
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
      <h1 className={cx("title")}>Thêm bài viết mới</h1>

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
          Thêm bài viết
        </button>
      </form>
    </div>
  );
};

export default AddPost;
