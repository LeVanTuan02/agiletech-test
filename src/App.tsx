import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
