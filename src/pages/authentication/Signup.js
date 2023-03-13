import "./auth.css";

export default function Signup() {
  return (
    <main className="signup">
      <form className="auth-form">
        <p>Sign Up</p>
        <input type="text" placeholder="Enter your username" />
        <input type="text" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your password" />
        <input type="text" placeholder="Confirm your password" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
