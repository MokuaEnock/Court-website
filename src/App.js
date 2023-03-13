import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Laning";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Landing />
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
