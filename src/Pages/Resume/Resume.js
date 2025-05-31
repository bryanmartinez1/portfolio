import "./Resume.css";

export default function Resume({ nightMode }) {
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href =
      "https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/Bryan_Martinez_Resume_Software_Engineer.pdf";
    element.download = "Bryan_Martinez_Resume_Software_Engineer.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="resumePage">
      <iframe
        src="https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/Bryan_Martinez_Resume_Software_Engineer.pdf"
        height="100%"
      />
    </div>
  );
}
