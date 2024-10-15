import { createBrowserRouter } from "react-router-dom";
import MainView from "../views/Main.view";

export const rootRouter = createBrowserRouter([{
  path: "/",
  element: <MainView />
}])