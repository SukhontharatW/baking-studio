import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
