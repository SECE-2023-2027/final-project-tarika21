export default function Home() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>
            <span style={styles.logoIcon}>📋</span>
            SnapPhase
          </h1>
          <nav style={styles.nav}>
            <a href="/login" style={styles.navLink}>Login</a>
            <a href="/register" style={styles.navLink}>Register</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main style={styles.main}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h2 style={styles.title}>
              Manage Your Projects 
              <span style={styles.titleAccent}> Effectively</span>
            </h2>
            <p style={styles.subtitle}>
              Transform your workflow with organized phases, clear milestones, and actionable checklists. 
              Stay on track, meet deadlines, and deliver exceptional results every time.
            </p>
            <div style={styles.buttonContainer}>
              <a href="/register" style={{ ...styles.button, ...styles.buttonPrimary }}>
                Get Started Free
                <span style={styles.buttonIcon}>→</span>
              </a>
              <a href="/login" style={{ ...styles.button, ...styles.buttonSecondary }}>
                Sign In
              </a>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🎯</div>
              <h3 style={styles.featureTitle}>Phase-Based Planning</h3>
              <p style={styles.featureText}>Break down complex projects into manageable phases with clear objectives</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📊</div>
              <h3 style={styles.featureTitle}>Progress Tracking</h3>
              <p style={styles.featureText}>Monitor completion rates and identify bottlenecks in real-time</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Team Collaboration</h3>
              <p style={styles.featureText}>Coordinate with your team and keep everyone aligned on project goals</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div style={styles.decorativeCircle1}></div>
        <div style={styles.decorativeCircle2}></div>
        <div style={styles.decorativeCircle3}></div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Project Phase Checklist. All rights reserved.
          </p>
          <div style={styles.footerLinks}>
            <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
            <a href="/terms" style={styles.footerLink}>Terms of Service</a>
            <a href="/contact" style={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '80px',
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'left',
    transition: 'all 0.3s ease',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  
  headerContent: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 0rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  logo: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#f8fafc",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  
  logoIcon: {
    fontSize: "2rem",
    filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))",
  },
  
  nav: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  
  navLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  },
  
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 2rem 4rem",
    position: "relative",
    background: `
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
    `,
  },
  
  heroContent: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4rem",
    zIndex: 2,
  },
  
  heroText: {
    textAlign: "center",
    maxWidth: "800px",
  },
  
  title: {
    fontSize: "4rem",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
    background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  
  titleAccent: {
    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  
  subtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.7",
    color: "#94a3b8",
    marginBottom: "3rem",
    fontWeight: "400",
  },
  
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  
  button: {
    padding: "1rem 2rem",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    minWidth: "180px",
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    position: "relative",
    overflow: "hidden",
  },
  
  buttonPrimary: {
    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    color: "#ffffff",
    border: "none",
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  
  buttonSecondary: {
    backgroundColor: "rgba(248, 250, 252, 0.05)",
    color: "#f8fafc",
    border: "2px solid rgba(148, 163, 184, 0.2)",
    backdropFilter: "blur(10px)",
  },
  
  buttonIcon: {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease",
  },
  
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    width: "100%",
    maxWidth: "1000px",
  },
  
  featureCard: {
    background: "rgba(248, 250, 252, 0.02)",
    border: "1px solid rgba(148, 163, 184, 0.1)",
    borderRadius: "16px",
    padding: "2rem",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  
  featureIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    filter: "drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3))",
  },
  
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: "1rem",
  },
  
  featureText: {
    color: "#94a3b8",
    lineHeight: "1.6",
    fontSize: "1rem",
  },
  
  decorativeCircle1: {
    position: "absolute",
    top: "10%",
    right: "10%",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
    zIndex: 1,
  },
  
  decorativeCircle2: {
    position: "absolute",
    bottom: "20%",
    left: "5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: 1,
  },
  
  decorativeCircle3: {
    position: "absolute",
    top: "50%",
    right: "-5%",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
    filter: "blur(30px)",
    zIndex: 1,
  },
  
  footer: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderTop: "1px solid rgba(148, 163, 184, 0.1)",
    backdropFilter: "blur(20px)",
    width: "100%",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  
  footerText: {
    color: "#64748b",
    fontSize: "0.9rem",
    margin: 0,
  },
  
  footerLinks: {
    display: "flex",
    gap: "2rem",
  },
  
  footerLink: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
  },
};

// Add hover effects with CSS-in-JS simulation
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
    }
    
    a[href="/login"]:hover, a[href="/register"]:hover {
      color: #3b82f6 !important;
      background-color: rgba(59, 130, 246, 0.1) !important;
      border-color: rgba(59, 130, 246, 0.3) !important;
    }
    
    .button-primary:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4), 0 6px 10px rgba(0, 0, 0, 0.15) !important;
    }
    
    .button-primary:hover .button-icon {
      transform: translateX(4px) !important;
    }
    
    .button-secondary:hover {
      background-color: rgba(248, 250, 252, 0.1) !important;
      border-color: rgba(59, 130, 246, 0.5) !important;
      transform: translateY(-1px) !important;
    }
    
    .feature-card:hover {
      transform: translateY(-5px) !important;
      border-color: rgba(59, 130, 246, 0.3) !important;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
    }
    
    .footer-link:hover {
      color: #3b82f6 !important;
    }
  `;
  document.head.appendChild(style);
}