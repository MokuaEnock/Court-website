import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="landing">
      <section className="landing-cont1">
        <h4>We are bringing Artificial intelligence to the field of law</h4>
        <p>We are ungovernable</p>
        <Link className="signup-button" to="/auth/signup">
          Sign Up
        </Link>
      </section>
      <section className="landing-cont1">This is the second container</section>
    </main>
  );
}
