import "./Resume.css";

export default function Resume({ nightMode }) {
  return (
    <div className="resumePage">
      <iframe
        title="Resume"
        src="https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/Bryan_Martinez_Resume_Software_Engineer.pdf"
        height="100%"
      />
    </div>
  );
}
