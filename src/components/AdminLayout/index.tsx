import { Link } from "react-router-dom";

type AdminLayoutProps = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="font-inter h-screen flex">
      <aside className="w-[320px] max-w-full bg-[#D9D9D9]">
        <Link to="/" className="block mt-[30px] ml-[100px] mb-10">
          <img src="/images/Logo.png" alt="Logo" />
        </Link>

        <ul>
          <li className="ml-[34px] mb-[10px] text-xl leading-8 text-secondary">
            <Link to="/profile">Posts</Link>
          </li>
          <li className="ml-[34px] mb-[10px] text-xl leading-8 text-secondary">
            <button>Logout</button>
          </li>
        </ul>
      </aside>

      <main className="pt-[120px] pl-[120px] pr-[124px] flex-1 h-screen overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
