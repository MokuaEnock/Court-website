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
      <section className="landing-cont1">
        <h4>What is Insunity?</h4>
        <p>
          Insunity is a AI powered platform that employs the power of deep
          learning and machine learning to make the field of law a bit hectic.
        </p>
      </section>

      <section className="landing-cont1">
        <h4>Why us?</h4>
        <p>We focus on the documents and let you focus on your client.</p>
      </section>
    </main>
  );
}
