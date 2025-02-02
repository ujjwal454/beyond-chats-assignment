import { routes } from "./config";
import { useRoutes } from "react-router-dom";

const Routes = () => {
  const allRoutes = useRoutes(routes);
  return <>{allRoutes}</>;
};

export default Routes;
