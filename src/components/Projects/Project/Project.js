import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Opt, Break, Header, OptWrap, CreatedAt, Container, Description } from './Project.style';

const Project = ({ project }) => {
  const { projectName, projectUrl, sourceCodeUrl, description, createdAt } = project;
  return (
    <Container>
      <Header>{projectName}</Header>
      <CreatedAt>{createdAt}</CreatedAt>
      <OptWrap>
        <Opt isFirst={true} href={projectUrl} target='_blank'>
          project
        </Opt>
        <Break />
        <Opt href={sourceCodeUrl} target='_blank'>
          source code
        </Opt>
      </OptWrap>
      {project.description.map((description, idx) => {
        return (
          <Fragment>
            <Description key={idx}>{description}</Description>
          </Fragment>
        );
      })}
    </Container>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    sourceCodeUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
  }),
};

export default Project;
