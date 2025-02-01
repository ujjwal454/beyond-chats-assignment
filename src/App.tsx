import { ToastContainer } from "react-toastify";
import Register from "./pages/register";
import Verify from "./pages/verify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Verify />
    </div>
  );
};

export default App;
