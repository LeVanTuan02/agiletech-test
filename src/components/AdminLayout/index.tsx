import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../redux/authSlice";
import { toast } from "react-toastify";
import PrivateRouter from "../PrivateRouter";
import classNames from "classnames/bind";
import styles from "./AdminLayout.module.css";
import { useEffect } from "react";

const cx = classNames.bind(styles);

type AdminLayoutProps = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signout());
    toast.success("Đăng xuất thành công");
    navigate("/signin");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <PrivateRouter>
      <div className={cx("container")}>
        <aside className={cx("sidebar")}>
          <Link to="/" className={cx("sidebar__logo")}>
            <img src="/images/Logo.png" alt="Logo" />
          </Link>

          <ul>
            <li className={cx("sidebar__menu-item")}>
              <Link to="/profile/posts" className={cx("sidebar__menu-item-link")}>
                Posts
              </Link>
            </li>
            <li className={cx("sidebar__menu-item")}>
              <button onClick={handleSignout} className={cx("sidebar__menu-item-btn")}>
                Logout
              </button>
            </li>
          </ul>
        </aside>

        <main className={cx("content")}>{children}</main>
      </div>
    </PrivateRouter>
  );
};

export default AdminLayout;
