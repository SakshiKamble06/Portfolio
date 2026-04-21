import React from "react";

const PersonalDetails = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          marginBottom: "40px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        About Me
      </h1>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "grid",
          gap: "25px",
        }}
      >
        {/* Profile Card */}
        <div className="card">
          <h2>Sakshi Rajkumar Kamble</h2>
          <h4 style={{ color: "#6c63ff" }}>MCA Student</h4>
          <p>
            Passionate MCA student and aspiring Java Developer with strong
            interest in web development and problem-solving.
          </p>
        </div>

        {/* Skills */}
        <div className="card">
          <h3>Skills</h3>
          <div className="skills">
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MySQL</span>
            <span>Git</span>
          </div>
        </div>

        {/* Education */}
        <div className="card">
          <h3>Education</h3>
          <p><b>MCA</b> - RIT (2024–2026)</p>
          <p><b>BCOM IT</b> - SGM College Karad (2021–2024)</p>
        </div>

        {/* Contact */}
        <div className="card">
          <h3>Contact</h3>
          <p>📍 Pune, India</p>
          <p>📧 sakshikamble0609@gmail.com</p>
          <p>📱 9075017632</p>
          <p>🔗 linkedin.com/in/SakshiKamble</p>
          <p>💻 github.com/SakshiKamble06</p>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .card {
            background: white;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }

          .skills span {
            background: #6c63ff;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default PersonalDetails;