import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Dashboard /> }],
    // path: "/",
    // element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
