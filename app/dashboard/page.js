'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const styles = {
  container: {
    minHeight: "100vh",
    background: `
      linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%),
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)
    `,
    padding: "2rem",
    color: "#f1f5f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  createSection: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    maxWidth: "500px",
    margin: "0 auto 2rem auto",
  },
  input: {
    flex: 1,
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#f1f5f9",
    outline: "none",
    fontSize: "1rem",
  },
  projectInput: {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#f1f5f9",
    outline: "none",
    fontSize: "1.25rem",
    fontWeight: "600",
    width: "80%",
    marginBottom: "0.75rem",
  },
  phaseInput: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#f1f5f9",
    outline: "none",
    fontSize: "1rem",
    fontWeight: "600",
  },
  taskInput: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid rgba(71, 85, 105, 0.6)",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    color: "#f1f5f9",
    outline: "none",
    fontSize: "0.9rem",
    marginLeft: "0.5rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  editButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginTop: "1rem",
    fontWeight: "600",
  },
  saveButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginRight: "0.75rem",
    fontWeight: "600",
  },
  cancelButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  deleteButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginLeft: "0.75rem",
  },
  smallDeleteButton: {
    padding: "0.25rem 0.5rem",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.8rem",
    marginLeft: "0.5rem",
  },
  addButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
    fontWeight: "600",
  },
  projectCard: {
    backgroundColor: "rgba(30, 41, 59, 0.9)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(71, 85, 105, 0.3)",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    borderRadius: "12px",
    maxWidth: "800px",
    margin: "0 auto 1.5rem auto",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#f1f5f9",
    marginBottom: "0.5rem",
  },
  progressSection: {
    margin: "1rem 0",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    background: "rgba(71, 85, 105, 0.5)",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #10b981 0%, #34d399 100%)",
    borderRadius: "4px",
    transition: "width 0.5s ease",
  },
  progressText: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginTop: "0.5rem",
  },
  phase: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgba(15, 23, 42, 0.5)",
    borderRadius: "8px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
  },
  phaseTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#60a5fa",
    marginBottom: "0.75rem",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    margin: "0.75rem 0",
  },
  taskItem: {
    padding: "0.5rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.25rem",
  },
  checkbox: {
    width: "1.2rem",
    height: "1.2rem",
    accentColor: "#10b981",
  },
  buttonGroup: {
    marginTop: "1rem",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
};

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [projects, setProjects] = useState([]);
  const [editBuffer, setEditBuffer] = useState({});
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    if (!session) router.push('/login');
    else fetchProjects();
  }, [session]);

  const fetchProjects = async () => {
    const res = await fetch('/api/project');
    const data = await res.json();
    setProjects(data);

    const buffer = {};
    const mode = {};
    data.forEach((project) => {
      buffer[project._id] = {
        title: project.title,
        phases: project.phases,
      };
      mode[project._id] = false;
    });
    setEditBuffer(buffer);
    setEditMode(mode);
  };

  const createProject = async () => {
    const res = await fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify({ title, phases: [] }),
    });

    if (res.ok) {
      setTitle('');
      fetchProjects();
    }
  };

  const updateProject = async (projectId) => {
    await fetch('/api/project', {
      method: 'PUT',
      body: JSON.stringify({
        projectId,
        ...editBuffer[projectId],
      }),
    });
    setEditMode((prev) => ({ ...prev, [projectId]: false }));
    fetchProjects();
  };

  const deleteProject = async (projectId) => {
    const res = await fetch(`/api/project?id=${projectId}`, {
      method: 'DELETE',
    });
    if (res.ok) fetchProjects();
  };

  const calculateProgress = (phases) => {
    const tasks = phases.flatMap((p) => p.checklist);
    const done = tasks.filter((t) => t.done).length;
    return Math.round((done / tasks.length) * 100) || 0;
  };

  const handleEditChange = (projectId, key, value) => {
    setEditBuffer((prev) => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [key]: value,
      },
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📋 Project Dashboard</h1>

      <div style={styles.createSection}>
        <input
          placeholder="New Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <button onClick={createProject} style={styles.button}>
          ➕ Create
        </button>
      </div>

      {projects.map((project) => {
        const buffer = editBuffer[project._id];
        const isEditing = editMode[project._id];

        return (
          <div key={project._id} style={styles.projectCard}>
            {isEditing ? (
              <>
                <input
                  value={buffer?.title || ''}
                  onChange={(e) =>
                    handleEditChange(project._id, 'title', e.target.value)
                  }
                  style={styles.projectInput}
                  placeholder="Project title"
                />
                <button
                  onClick={() => deleteProject(project._id)}
                  style={styles.deleteButton}
                >
                  🗑 Delete
                </button>

                <div style={styles.progressSection}>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${calculateProgress(buffer.phases)}%`,
                      }}
                    />
                  </div>
                  <p style={styles.progressText}>
                    {calculateProgress(buffer.phases)}% complete
                  </p>
                </div>

                {buffer?.phases.map((phase, pIdx) => (
                  <div key={pIdx} style={styles.phase}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <input
                        value={phase.title}
                        onChange={(e) => {
                          const updatedPhases = [...buffer.phases];
                          updatedPhases[pIdx].title = e.target.value;
                          handleEditChange(project._id, 'phases', updatedPhases);
                        }}
                        placeholder="Phase title"
                        style={styles.phaseInput}
                      />
                      <button
                        onClick={() => {
                          const updatedPhases = [...buffer.phases];
                          updatedPhases.splice(pIdx, 1);
                          handleEditChange(project._id, 'phases', updatedPhases);
                        }}
                        style={styles.smallDeleteButton}
                      >
                        ❌
                      </button>
                    </div>

                    <ul style={styles.taskList}>
                      {phase.checklist.map((item, tIdx) => (
                        <li key={tIdx} style={styles.taskItem}>
                          <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => {
                              const updatedPhases = [...buffer.phases];
                              updatedPhases[pIdx].checklist[tIdx].done = !item.done;
                              handleEditChange(project._id, 'phases', updatedPhases);
                            }}
                            style={styles.checkbox}
                          />
                          <input
                            value={item.task}
                            onChange={(e) => {
                              const updatedPhases = [...buffer.phases];
                              updatedPhases[pIdx].checklist[tIdx].task = e.target.value;
                              handleEditChange(project._id, 'phases', updatedPhases);
                            }}
                            style={{
                              ...styles.taskInput,
                              textDecoration: item.done ? 'line-through' : 'none',
                              color: item.done ? '#10b981' : '#f1f5f9',
                              flex: 1,
                            }}
                            placeholder="Task description"
                          />
                          <button
                            onClick={() => {
                              const updatedPhases = [...buffer.phases];
                              updatedPhases[pIdx].checklist.splice(tIdx, 1);
                              handleEditChange(project._id, 'phases', updatedPhases);
                            }}
                            style={styles.smallDeleteButton}
                          >
                            🗑
                          </button>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        const updatedPhases = [...buffer.phases];
                        updatedPhases[pIdx].checklist.push({ task: '', done: false });
                        handleEditChange(project._id, 'phases', updatedPhases);
                      }}
                      style={styles.addButton}
                    >
                      ➕ Add Task
                    </button>
                  </div>
                ))}

                <button
                  style={{ ...styles.addButton, marginTop: '1rem' }}
                  onClick={() => {
                    const updatedPhases = [
                      ...buffer.phases,
                      { title: 'New Phase', checklist: [] },
                    ];
                    handleEditChange(project._id, 'phases', updatedPhases);
                  }}
                >
                  ➕ Add Phase
                </button>

                <div style={styles.buttonGroup}>
                  <button
                    onClick={() => updateProject(project._id)}
                    style={styles.saveButton}
                  >
                    💾 Save Changes
                  </button>
                  <button
                    onClick={() =>
                      setEditMode((prev) => ({ ...prev, [project._id]: false }))
                    }
                    style={styles.cancelButton}
                  >
                    ❌ Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 style={styles.projectTitle}>{project.title}</h2>
                
                <div style={styles.progressSection}>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${calculateProgress(project.phases)}%`,
                      }}
                    />
                  </div>
                  <p style={styles.progressText}>
                    {calculateProgress(project.phases)}% complete
                  </p>
                </div>

                {project.phases.map((phase, pIdx) => (
                  <div key={pIdx} style={styles.phase}>
                    <h4 style={styles.phaseTitle}>
                      {phase.title} ({phase.checklist.filter(i => i.done).length}/{phase.checklist.length})
                    </h4>
                    <ul style={styles.taskList}>
                      {phase.checklist.map((item, i) => (
                        <li key={i} style={styles.taskItem}>
                          <input 
                            type="checkbox" 
                            checked={item.done} 
                            readOnly 
                            style={styles.checkbox}
                          />
                          <span
                            style={{
                              textDecoration: item.done ? 'line-through' : 'none',
                              color: item.done ? '#10b981' : '#f1f5f9',
                            }}
                          >
                            {item.task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <button
                  onClick={() =>
                    setEditMode((prev) => ({ ...prev, [project._id]: true }))
                  }
                  style={styles.editButton}
                >
                  ✏️ Edit
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}