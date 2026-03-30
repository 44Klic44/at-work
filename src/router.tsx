import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/edit/:id", element: <Edit /> },
]);
