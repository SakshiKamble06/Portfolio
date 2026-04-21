import React from "react";
import Sakshi from "../assets/Sakshi.jpeg";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(10px)",
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Profile Image */}
        <img
          src={Sakshi}
          alt="profile"
          style={{
            width: "160px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #00d4ff",
            marginBottom: "20px",
          }}
        />

        {/* Name */}
        <h1 style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Sakshi Rajkumar Kamble
        </h1>

        {/* Role */}
        <h3 style={{ marginBottom: "15px" }}>
          <span style={{ color: "#00d4ff" }}>Full Stack Developer</span>
        </h3>

        {/* New Updated Content */}
        <p style={{ lineHeight: "1.7", fontSize: "15px" }}>
          I’m currently pursuing my MCA and enjoy creating responsive and
          user-friendly web applications. I focus on writing clean code and
          building practical solutions that solve real-life problems.
        </p>

        <p style={{ lineHeight: "1.7", fontSize: "15px" }}>
          My interests include frontend development with React, backend logic
          using Java, and managing data efficiently with databases. I’m always
          eager to learn new technologies and improve my development skills.
        </p>

        {/* Skills */}
        <div style={{ marginTop: "20px" }}>
          <span className="badge bg-info me-2">React</span>
          <span className="badge bg-success me-2">Java</span>
          <span className="badge bg-warning text-dark me-2">MySQL</span>
          <span className="badge bg-primary">JavaScript</span>
        </div>

        {/* Buttons */}
        <div className="mt-4">
          <a
            href="/resume.pdf"
            className="btn btn-info rounded-pill me-3 px-4"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <a
            href="https://github.com/"
            className="btn btn-outline-light rounded-pill px-4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;