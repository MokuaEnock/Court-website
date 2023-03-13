import "./user.css";
import { PDFDocument } from "pdf-lib";
import { JSZip } from "jszip";

export default function User() {
  function handleSubmit(e) {
    e.preventDefault();

    const file = e.target.elements[0].files[0]; // Get uploaded file

    if (!file) {
      return; // Return early if no file uploaded
    }

    const reader = new FileReader(); // Create new FileReader object

    reader.onload = async function () {
      const content = reader.result; // Get uploaded file content

      let text;

      // Extract text from file based on file type
      if (file.type === "application/pdf") {
        const pdfDoc = await PDFDocument.load(content);
        const pages = pdfDoc.getPages();
        text = pages.map((page) => page.getText()).join("\n");
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const zip = await JSZip.loadAsync(content);
        const doc = await zip.file("word/document.xml").async("string");
        text = doc.replace(/<[^>]+>/g, "");
      }

      // Do something with the extracted text
      console.log(text);
    };

    reader.readAsArrayBuffer(file); // Read uploaded file as ArrayBuffer
  }

  return (
    <main className="user">
      <section className="user-container">
        <h3>Upload your document</h3>
        <form className="file-form" onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder="Upload file"
            className="file-upload-input"
            accept=".pdf, .docx"
          />
          <button type="submt">Submit</button>
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
