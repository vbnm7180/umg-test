import { createBrowserRouter } from "react-router-dom";
import App from "./layout/App";
import { SdmVehicleManufactures } from "./pages/sdm-vehicle-manufactures/sdm-vehicle-manufactures";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vehicle-manufactures",
    element: <SdmVehicleManufactures />,
  },
]);
