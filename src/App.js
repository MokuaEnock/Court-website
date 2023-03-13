import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Laning";
import User from "./pages/user/User";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";

function App() {
  return (
    <BrowserRouter>
      <Landing />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/auth">
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
