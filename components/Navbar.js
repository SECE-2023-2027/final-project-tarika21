'use client';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="/" style={styles.logo}>📋 SnapPhase</a>
      <div style={styles.links}>
        <a href="/dashboard" style={styles.link}>Dashboard</a>
        <a href="/login" style={styles.link}>Login</a>
        <a href="/register" style={styles.link}>Register</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1000,
    fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    boxSizing: 'border-box',
    margin: 0,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'inherit',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
  },
};

// Add hover effects and global styles
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding-top: 80px;
      font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      overflow-x: hidden;
    }
    
    a[href="/dashboard"]:hover, a[href="/login"]:hover, a[href="/register"]:hover {
      color: #3b82f6 !important;
      background: rgba(59, 130, 246, 0.1) !important;
      border-color: rgba(59, 130, 246, 0.3) !important;
    }
  `;
  document.head.appendChild(style);
}