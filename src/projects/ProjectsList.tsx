import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface PRojectsListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectsList({ projects, onSave }: PRojectsListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div className="cols-sm" key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm
              project={project}
              onCancel={cancelEditing}
              onSave={onSave}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
