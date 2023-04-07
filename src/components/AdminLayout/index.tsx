import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../redux/authSlice";
import { toast } from "react-toastify";
import PrivateRouter from "../PrivateRouter";

type AdminLayoutProps = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signout());
    toast.success("Đăng xuất thành công");
    navigate("/");
  };

  return (
    <PrivateRouter>
      <div className="font-inter h-screen flex">
        <aside className="w-[320px] max-w-full bg-[#D9D9D9] hidden md:block">
          <Link to="/" className="block mt-[30px] ml-[100px] mb-10">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>

          <ul>
            <li className="ml-[34px] mb-[10px] text-xl leading-8 text-secondary">
              <Link to="/profile/posts">Posts</Link>
            </li>
            <li className="ml-[34px] mb-[10px] text-xl leading-8 text-secondary">
              <button onClick={handleSignout}>Logout</button>
            </li>
          </ul>
        </aside>

        <main className="p-10 md:pt-[120px] md:pl-[120px] md:pr-[124px] flex-1 h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </PrivateRouter>
  );
};

export default AdminLayout;
