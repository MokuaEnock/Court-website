import "./auth.css";

export default function Login() {
  return (
    <main className="login">
      <form className="auth-form">
        <p>Login</p>
        <input type="text" placeholder="Enter your username" />
        <input type="text" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your password" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </main>
  );
}
