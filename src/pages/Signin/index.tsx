import { Link } from "react-router-dom";

type Props = {};

const Signin = (props: Props) => {
  return (
    <div className="font-inter">
      <div className="my-container mx-auto">
        <Link to="/" className="mt-[62px] block">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="w-screen h-[calc(100vh-62px-36px)] flex items-center justify-center flex-col">
        <h1 className="text-[64px] leading-[102px] mb-[36px]">Sign In</h1>

        <form action="">
          <label htmlFor="Username" className="leading-[25.6px] mb-3 block">
            Username
          </label>

          <input
            type="text"
            className="w-[407px] h-[57px] px-3 outline-none border bg-[#FDFDFD] rounded-[6px] border-black mb-[46px]"
          />

          <button className="bg-primary w-[413px] h-[53px] block rounded-full text-white transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
