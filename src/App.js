import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Jest from "./components/Jest";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/jest",
      element: <Jest />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
