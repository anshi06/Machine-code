import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Jest from "./components/Jest";
import RouterPage from "./components/RouterPage";
import ReactTestingLibrary from "./components/ReactTestingLibrary";
import ShimmerUI from "./components/ShimmerUI";
import InfiniteScroll from "./components/InfiniteScroll";
import Cart from "./components/CartContextAPI/Cart";
import CountdownTimer from "./components/ReduxCounter/CountdownTimer";
import MultiLang from "./components/MultiLang";
import Accordian from "./components/Accordian/Accordian";
import Comments from "./components/Comments";
import ImageSlider from "./components/ImageSlider";
import LiveChat from "./components/LiveChat/LiveChat";
import SearchUi from "./components/SearchUi";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/React-router",
      element: <RouterPage />,
    },

    {
      path: "/Jest",
      element: <Jest />,
    },
    {
      path: "/React-Testing-Library",
      element: <ReactTestingLibrary />,
    },
    {
      path: "/ShimmerUI",
      element: <ShimmerUI />,
    },
    {
      path: "/Infinite-Scroll",
      element: <InfiniteScroll />,
    },
    {
      path: "/Cart",
      element: <Cart />,
    },
    {
      path: "/Countdown-Timer",
      element: <CountdownTimer />,
    },
    {
      path: "/MultiLanguageSupport",
      element: <MultiLang />,
    },
    {
      path: "/Accordian",
      element: <Accordian />,
    },
    {
      path: "/ReditNestedComponents",
      element: <Comments />,
    },
    {
      path: "/ImageSlider",
      element: <ImageSlider />,
    },
     {
      path: "/LiveChat",
      element: <LiveChat/>,
    },
    {
      path: "/AutoCompleteAndSearchBar",
      element: <SearchUi />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
