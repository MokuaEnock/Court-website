import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import Landing from "./pages/landing/Laning";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Landing />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
