import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Jest from "./components/Jest";
import RouterPage from "./components/RouterPage";
import ReactTestingLibrary from "./components/ReactTestingLibrary";

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
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
