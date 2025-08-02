'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.ok) router.push("/dashboard");
    else alert("Login failed");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Login to Your Account</h2>

        <input
          style={styles.input}
          placeholder="📧 Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          style={styles.input}
          placeholder="🔑 Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <a href="/register" style={styles.link}>Register</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    background: `
      linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%),
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
      radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
    `,
    backgroundAttachment: "fixed",
  },
  card: {
    backgroundColor: "rgba(30, 41, 59, 0.85)",
    backdropFilter: "blur(16px)",
    borderRadius: "16px",
    padding: "2.5rem",
    width: "100%",
    maxWidth: "420px",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    color: "#f1f5f9",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    position: "relative",
    overflow: "hidden",
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
    `,
    pointerEvents: "none",
    zIndex: 1,
  },
  cardContent: {
    position: "relative",
    zIndex: 2,
  },
  heading: {
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
  },
  input: {
    width: "100%",
    padding: "1rem",
    margin: "0.75rem 0",
    borderRadius: "10px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    color: "#f1f5f9",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    boxSizing: "border-box",
  },
  inputFocus: {
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.3)",
    backgroundColor: "rgba(15, 23, 42, 0.9)",
  },
  inputPlaceholder: {
    color: "#94a3b8",
  },
  button: {
    width: "100%",
    padding: "1rem",
    marginTop: "1.5rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1.05rem",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.6)",
  },
  buttonActive: {
    transform: "translateY(0)",
  },
  footerText: {
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#94a3b8",
    lineHeight: "1.5",
  },
  link: {
    color: "#60a5fa",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#a78bfa",
    textShadow: "0 0 8px rgba(167, 139, 250, 0.6)",
  },
  // Additional utility styles for enhanced interactivity
  glowEffect: {
    position: "relative",
  },
  glowBefore: {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
    borderRadius: "12px",
    zIndex: -1,
    filter: "blur(8px)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  // Animated gradient background for special elements
  animatedGradient: {
    background: "linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 8s ease infinite",
  },
  // CSS keyframes would need to be injected separately
  keyframes: `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
      50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
    }
  `
};