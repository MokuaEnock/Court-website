import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      This is the header
      <Link to="/">Home</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/signup">Signup</Link>
      <Link to="/user">User</Link>
    </header>
  );
}
