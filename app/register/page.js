'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const register = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <input
          style={styles.input}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    minHeight: "100vh",
    background: `
      linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%),
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
      radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
    `,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    backgroundColor: "rgba(30, 41, 59, 0.9)",
    backdropFilter: "blur(16px)",
    color: "#f1f5f9",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    minWidth: "350px",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    border: "1px solid rgba(71, 85, 105, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "700",
    textAlign: "center",
    background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
  },
  input: {
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    fontSize: "1rem",
    width: "100%",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#f1f5f9",
    outline: "none",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    boxSizing: "border-box",
  },
  inputFocus: {
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.3)",
    backgroundColor: "rgba(15, 23, 42, 0.95)",
  },
  inputPlaceholder: {
    color: "#94a3b8",
  },
  button: {
    padding: "1rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    position: "relative",
    overflow: "hidden",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.6)",
    background: "linear-gradient(135deg, #2563eb 0%, #5b21b6 50%, #7c3aed 100%)",
  },
  buttonActive: {
    transform: "translateY(0)",
    boxShadow: "0 2px 10px rgba(59, 130, 246, 0.5)",
  },
  // Additional utility classes for enhanced styling
  cardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
    `,
    pointerEvents: "none",
    borderRadius: "16px",
  },
  textSecondary: {
    color: "#94a3b8",
    fontSize: "0.9rem",
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
};