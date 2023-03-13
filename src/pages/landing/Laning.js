import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="landing">
      <section className="landing-cont1">
        This is the first container
        <Link className="signup-button" to="/auth/signup">
          Sign Up
        </Link>
      </section>
      <section className="landing-cont1">This is the second container</section>
    </main>
  );
}
