'use client';

import { useState } from "react";

export default function ProjectCard({ project, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [localProject, setLocalProject] = useState(project);

  const handleChange = (field, value) => {
    setLocalProject({ ...localProject, [field]: value });
  };

  const handlePhaseChange = (index, value) => {
    const updatedPhases = [...localProject.phases];
    updatedPhases[index].title = value;
    setLocalProject({ ...localProject, phases: updatedPhases });
  };

  const handleTaskChange = (phaseIndex, taskIndex, value) => {
    const updatedPhases = [...localProject.phases];
    updatedPhases[phaseIndex].checklist[taskIndex].task = value;
    setLocalProject({ ...localProject, phases: updatedPhases });
  };

  const addPhase = () => {
    setLocalProject({
      ...localProject,
      phases: [...localProject.phases, { title: '', checklist: [] }]
    });
  };

  const addTask = (phaseIndex) => {
    const updatedPhases = [...localProject.phases];
    updatedPhases[phaseIndex].checklist.push({ task: '', done: false });
    setLocalProject({ ...localProject, phases: updatedPhases });
  };

  const saveChanges = async () => {
    await fetch("/api/project", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: localProject._id,
        title: localProject.title,
        phases: localProject.phases
      }),
    });
    setEditMode(false);
    onUpdate(); // Refresh project list
  };

  return (
    <div className="project-card border p-4 rounded-md shadow-md">
      {editMode ? (
        <>
          <input
            type="text"
            className="text-2xl font-bold w-full"
            value={localProject.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {localProject.phases.map((phase, phaseIdx) => (
            <div key={phaseIdx} className="mt-3">
              <input
                value={phase.title}
                onChange={(e) => handlePhaseChange(phaseIdx, e.target.value)}
                className="font-semibold"
              />
              <ul className="ml-4">
                {phase.checklist.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <input
                      type="text"
                      value={item.task}
                      onChange={(e) =>
                        handleTaskChange(phaseIdx, itemIdx, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
              <button onClick={() => addTask(phaseIdx)} className="text-sm text-blue-600">+ Add Task</button>
            </div>
          ))}
          <button onClick={addPhase} className="text-sm mt-2 text-green-600">+ Add Phase</button>
          <div className="mt-3 flex gap-2">
            <button onClick={saveChanges} className="bg-blue-600 px-4 py-1 text-white rounded">Save Changes</button>
            <button onClick={() => setEditMode(false)} className="text-red-600">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">{project.title}</h2>
          {project.phases.map((phase, idx) => (
            <div key={idx} className="mt-2">
              <h3 className="font-semibold">{phase.title}</h3>
              <ul className="ml-4 list-disc">
                {phase.checklist.map((item, i) => (
                  <li key={i}>{item.task}</li>
                ))}
              </ul>
            </div>
          ))}
          <button onClick={() => setEditMode(true)} className="mt-3 text-sm text-blue-700">✏️ Edit</button>
        </>
      )}
    </div>
  );
}
