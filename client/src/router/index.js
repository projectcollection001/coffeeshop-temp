import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../views/Login";
import PageLayout from "../views/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [{ path: "login", element: <LoginForm /> }],
  },
]);

export default router;
