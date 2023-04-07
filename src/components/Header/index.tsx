import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="my-container mx-auto mt-[48px] px-3">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <img src="/images/Logo.png" alt="Logo" />
        </NavLink>

        <div className="flex flex-wrap flex-1 justify-end">
          <Link
            to="/signin"
            className="ml-8 font-inter w-[208px] max-w-full h-[60px] flex items-center justify-center bg-primary rounded-[50px] font-bold text-white shadow-[0_5px_5px_rgba(75,93,104,0.1)] transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]"
          >
            Sign In
          </Link>

          <Link
            to="/profile"
            className="mb-3 md:mb-0 ml-8 font-inter w-[208px] max-w-full h-[60px] flex items-center justify-center bg-primary rounded-[50px] font-bold text-white shadow-[0_5px_5px_rgba(75,93,104,0.1)] transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]"
          >
            Profile
          </Link>

          <button className="ml-8 font-inter w-[208px] max-w-full h-[60px] flex items-center justify-center bg-primary rounded-[50px] font-bold text-white shadow-[0_5px_5px_rgba(75,93,104,0.1)] transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)]">
            Logout
          </button>
        </div>
      </div>

      <div className={`mt-[130px] ${styles.header__bottom}`}>
        <h1 className="text-secondary leading-[88px] font-bold text-[40px] md:text-[80px] w-[640px] max-w-full mb-[55px]">
          Save your data storage here.
        </h1>

        <p className="font-avenir font-medium w-[378px] text-tertiary text-lg leading-[28.8px] mb-[55px]">
          Data Warehouse is a data storage area that has been tested for security, so you can store your data here
          safely but not be afraid of being stolen by others.
        </p>

        <Link
          to="/profile"
          className="font-avenir w-[169px] max-w-full h-[60px] flex items-center justify-center bg-primary rounded-[50px] text-lg font-extrabold text-white transition-all hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,0.2)] leading-[28.8px]"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Header;
