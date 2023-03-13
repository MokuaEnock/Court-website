import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      This is the header
      <Link to="/auth/login">Login</Link>
    </header>
  );
}
