import { createBrowserRouter } from "react-router-dom";
import App from "./layout/App";
import { SdmVehicleManufactures } from "./pages/sdm-vehicle-manufactures/sdm-vehicle-manufactures";
import { SdmCreateVehicle } from "./pages/sdm-create-vehicle/sdm-create-vehicle";
import { Login } from "./pages/login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vehicle-manufactures",
    element: <SdmVehicleManufactures />,
  },
  {
    path: "/create-vehicle",
    element: <SdmCreateVehicle />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
