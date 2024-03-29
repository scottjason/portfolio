import React from 'react';
import PropTypes from 'prop-types';
import Promotion from './Promotion';
import { Span, Role, Header, Subtext, Container, Description } from './Job.style';

const Job = ({ job }) => {
  const openLink = url => window.open(url, '_blank');
  const hasPromotions = Array.isArray(job.promotions) && job.promotions.length > 0;
  return (
    <Container>
      <Header>{job.company}</Header>
      <Subtext isSlogan={true}>{job.slogan}</Subtext>
      <Subtext onClick={() => openLink(job.website)} isLink={true} isHighlight={true}>
        {job.website}
      </Subtext>
      {hasPromotions && <Promotion promotions={job.promotions} />}
      <Role>{job.role}</Role>
      <Subtext isDate={true}>
        {job.startedAt} to {job.endedAt}
      </Subtext>
      {job.description.map((description, idx) => {
        return <Description key={idx}>{description}</Description>;
      })}
      <Subtext isStack={true}>
        <Span isHighlight={false} margin={'0 3px 0 0'}></Span>
        {job.stack}
      </Subtext>
    </Container>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    startedAt: PropTypes.string.isRequired,
    endedAt: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
  }),
};

export default Job;
