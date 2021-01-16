import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const renderSkills = skills.map(({ title, skill1, skill2, skill3, skill4, skill5 }) => {
    return (
      <Col className="mb-4" md={4} sm={6}>
        <div className="card shadow mb-4">
          <div className="card-body py-5 px-3">
            <h3 className="skills-subtitle mb-4 h1">{title}</h3>
            <ul className="list-bullets h5">
              <li>{skill1}</li>
              <li>{skill2}</li>
              <li>{skill3}</li>
              <li>{skill4}</li>
              <li>{skill5}</li>
            </ul>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div id="skills">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Container fluid="md">
          <h1 className="skills-title">Skills</h1>
          <Row>{renderSkills}</Row>
        </Container>
      </Fade>
    </div>
  );
};

export default Skills;
