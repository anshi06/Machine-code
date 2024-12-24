import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Jest from "./components/Jest";
import RouterPage from "./components/RouterPage";
import ReactTestingLibrary from "./components/ReactTestingLibrary";
import ShimmerUI from "./components/ShimmerUI";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/React-router",
      element: <RouterPage/>
    },

    {
      path: "/Jest",
      element: <Jest />,
    },
    {
      path: "/React-Testing-Library",
      element: <ReactTestingLibrary/>
    },
    {
      path: "/ShimmerUI",
      element: <ShimmerUI/>
    },
    {
      path: "/Infinite-Scroll",
      element: <InfiniteScroll/>
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
