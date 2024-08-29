import React from "react";

interface ProjectCardProps {
 title : string;
 description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description})=> {
 return(
  <div className="bg-white shadow-lg rounded-lg p500">
    <h2 className="text-xl font-medium font-mono mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
 ); 
};

export default ProjectCard;