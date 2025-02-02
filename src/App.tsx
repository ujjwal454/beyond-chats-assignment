import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
