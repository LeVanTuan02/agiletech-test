import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectSttLogin, signout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames/bind";

type Props = {};

const cx = classNames.bind(styles);

const Header = (props: Props) => {
  const isLogged = useSelector(selectSttLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signout());
    toast.success("Đăng xuất thành công");
    navigate("/signin");
  };

  return (
    <header className="container">
      <div className={cx("header__top")}>
        <NavLink to="/">
          <img src="/images/Logo.png" alt="Logo" />
        </NavLink>

        <div className={cx("header__top-right")}>
          {!isLogged ? (
            <Link to="/signin" className={`btn btn-has-shadow ${cx("header__top-right-btn")}`}>
              Sign In
            </Link>
          ) : (
            <>
              <Link
                to="/profile/posts"
                className={`btn btn-has-shadow ${cx(["header__top-right-btn", "header__top-right-btn-profile"])}`}
              >
                Profile
              </Link>

              <button onClick={handleSignout} className={`btn btn-has-shadow ${cx("header__top-right-btn")}`}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      <div className={cx("header__bottom")}>
        <h1 className={cx("header__bottom-title")}>Save your data storage here.</h1>

        <p className={cx("header__bottom-description")}>
          Data Warehouse is a data storage area that has been tested for security, so you can store your data here
          safely but not be afraid of being stolen by others.
        </p>

        <Link to="/profile" className={`btn ${cx("header__bottom-btn")}`}>
          Learn more
        </Link>
      </div>
    </header>
  );
};

export default Header;
