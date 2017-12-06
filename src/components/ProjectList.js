import React from "react";
import { Flex, Box } from "grid-styled";
import ProjectCard from "./ProjectCard";
import photoCanvasImage from "../assets/images/project_1.png";
import cardsMenuConcept from "../assets/images/project_2.png";
import Link from "gatsby-link";

const ProjectList = props => {
  const { projects } = props;
  if (projects) {
    return (
      <Flex wrap>
        {projects.map(({ node: project }) => (
          <Box
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            mb={[2, 2, 2, 2]}
            pr={[0, 2, 2, 2]}
            key={project.id}
          >
            <Link to={"projects/" + project.slug}>
              <ProjectCard
                image={project.bannerImage.resolutions}
                title={project.title}
                highlightColor={project.highlightColor}
              />
            </Link>
          </Box>
        ))}
      </Flex>
    );
  } else {
    return <div>No projects found.</div>;
  }
};

export default ProjectList;
