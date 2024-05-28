import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Mameno from "../pages/Mameno";
import Admin from "../pages/Admin";
import Thanks from "../pages/Thanks";
import Services from "../pages/Services";
import Projet from "../pages/Projet";
import Monarch from "../pages/Monarch";
import BuyPage from "../pages/BuyPage";

const path = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mameno",
        element: <Mameno />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "project",
        element: <Projet />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "thanks",
        element: <Thanks />,
      },
      {
        path: "monarch",
        element: <Monarch />,
      },
      {
        path: "monarch/micheltsilavo",
        element: <BuyPage />,
      },
    ],
  },
];

export default path;
