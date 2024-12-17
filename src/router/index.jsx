import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

export default routes;