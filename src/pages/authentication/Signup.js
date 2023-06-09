import "./auth.css";

export default function Signup() {
  return (
    <main className="signup">
      <form className="auth-form">
        <h4>Sign Up</h4>
        <input type="text" placeholder="Enter your username" />
        <input type="text" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your password" />
        <input type="text" placeholder="Confirm your password" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </main>
  );
}
