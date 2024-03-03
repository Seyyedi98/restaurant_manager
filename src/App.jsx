import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/admin-dashboard",
        element: <div>admin-dashboard</div>,
      },
      {
        path: "/restaurant-dashboard",
        element: <div>restaurant-dashboard</div>,
      },
      {
        path: "/user-dashboard",
        element: <div>user-dashboard</div>,
      },
      {
        path: "/food-detail",
        element: <div>food-detail</div>,
      },
      {
        path: "/food-review",
        element: <div>food-review</div>,
      },
      {
        path: "/settings",
        element: <div>settings</div>,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <div>Auth</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
