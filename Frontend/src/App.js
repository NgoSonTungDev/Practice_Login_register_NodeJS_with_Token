import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ReturnRoom from "./pages/ReturnRoom/ReturnRoom";
import BookRoom from "./pages/BookRoom/BookRoom";
import Statistical from "./pages/Statistical/Statistical";
import Qlluong from "./pages/QlLuong/QlLuong";
import AccountManagement from "./pages/AccountManagement/AccountManagement";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login-hotel" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/home/bookroom/:name" exact element={<BookRoom />} />
        <Route path="/home/returnroom/:name" exact element={<ReturnRoom />} />
        <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        <Route path="/statistical" exact element={<Statistical />} />
        <Route path="/registerUser" exact element={<Register />} />
        <Route path="/notfound" exact element={<NotFound />} />
        <Route path="/salary-management" exact element={<Qlluong />} />
        <Route path="/AccountManagement" exact element={<AccountManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
