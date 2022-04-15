import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserText from "./Components/UserText/UserText";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
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
        <Route path="/About" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/verifyEmail" element={<UserText />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
