import { useSelector } from "react-redux";
import { selectSttLogin } from "../../redux/authSlice";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = ({ children }: PrivateRouterProps) => {
  const isLogged = useSelector(selectSttLogin);

  return isLogged ? children : <Navigate to="/signin" />;
};

export default PrivateRouter;
