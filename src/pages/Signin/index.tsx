import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";
import { useEffect } from "react";
import { updateTitle } from "../../utils";
import classNames from "classnames/bind";
import styles from "./Signin.module.css";

const cx = classNames.bind(styles);

type Props = {};

interface InputsType {
  username: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập username"),
});

const Signin = (props: Props) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => updateTitle("Đăng nhập"), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    try {
      const { payload } = await dispatch(signin(data));
      if (payload.accessToken) {
        toast.success("Đăng nhập thành công");
        navigate("/profile/posts");
      } else {
        toast.info("Thông tin đăng nhập không chính xác");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  return (
    <main className={cx("content")}>
      <div className="container">
        <Link to="/" className={cx("logo")}>
          <img src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>

      <div className={cx("form-wrap")}>
        <h1 className={cx("title")}>Sign In</h1>

        <form action="" className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Username" className={cx("form-label")}>
            Username
          </label>

          <input type="text" {...register("username")} className={cx("form-control")} />
          <span className={cx("error-message")}>{errors.username?.message}</span>

          <button className={`btn ${cx("btn")}`}>Signin</button>
        </form>
      </div>
    </main>
  );
};

export default Signin;
