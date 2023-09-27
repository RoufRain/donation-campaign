import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement> </ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/Donation",
        element: <Donation> </Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/CardDetails/:id",
        element: <CardDetails> </CardDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
