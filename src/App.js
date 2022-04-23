import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Signup from "./Pages/Authentication/Signup/Signup";
import Home from "./Pages/Home/Home";
import MangeServices from "./Pages/ManageServices/MangeServices";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Services from "./Pages/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import SubHeader from "./Shared/Sub-Header/SubHeader";

function App() {
  return (
    <div>
      <SubHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/add-service"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-services"
          element={
            <RequireAuth>
              <MangeServices />
            </RequireAuth>
          }
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
