import "./user.css";

export default function User() {
  return (
    <main className="user">
      <section className="user-container">
        <h3>Upload your document</h3>
        <form className="file-form">
          <input
            type="file"
            placeholder="Upload file"
            className="file-upload-input"
            accept=".pdf, .docx"
          />
        </form>
      </section>

      <section className="user-container">
        <h3>Fill in your case</h3>
        <form className="file-form">
          <textarea placeholder="Enter text" className="file-upload-input" />
        </form>
      </section>

      <section className="user-container">
        <h3>Your output here</h3>
        <p>Here is your output</p>
      </section>
    </main>
  );
}
