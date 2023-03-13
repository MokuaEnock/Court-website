import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">Insunity</Link>
      <Link to="/user">User</Link>
      <Link to="/auth/login">Login</Link>
      {/* <Link to="/auth/signup">Signup</Link> */}
    </header>
  );
}
