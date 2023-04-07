import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";

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
        navigate("/profile");
      } else {
        toast.info("Thông tin đăng nhập không chính xác");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  return (
    <div className="font-inter">
      <div className="my-container mx-auto">
        <Link to="/" className="mt-[62px] block">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="w-screen h-[calc(100vh-62px-36px)] flex items-center justify-center flex-col">
        <h1 className="text-[64px] leading-[102px] mb-[36px]">Sign In</h1>

        <form action="" className="px-3 max-w-full" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Username" className="leading-[25.6px] mb-3 block">
            Username
          </label>

          <input
            type="text"
            {...register("username")}
            className="w-[407px] max-w-full h-[57px] px-3 outline-none border bg-[#FDFDFD] rounded-[6px] border-black"
          />
          <span className="text-red-500 text-sm block mt-1.5 font-helvetica">{errors.username?.message}</span>

          <button className="bg-primary w-[413px] max-w-full h-[53px] mt-[46px] block rounded-full text-white transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
