import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Signin from "./pages/Signin";
import ListPost from "./pages/Admin/ListPost";
import AdminLayout from "./components/AdminLayout";
import AddPost from "./pages/Admin/AddPost";
import UpdatePost from "./pages/Admin/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/profile/posts",
    element: (
      <AdminLayout>
        <ListPost />
      </AdminLayout>
    ),
  },
  {
    path: "/profile/posts/add",
    element: (
      <AdminLayout>
        <AddPost />
      </AdminLayout>
    ),
  },
  {
    path: "/profile/posts/:id/:title/update",
    element: (
      <AdminLayout>
        <UpdatePost />
      </AdminLayout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
