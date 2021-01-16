import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);

  console.log(contact);

  const renderContactDetails = contact.map(({ icon, title, details }) => {
    return (
      <Col className="single-contact" md={4} sm={12}>
        <i className={icon}></i>
        <h5>{title}</h5>
        <p>{details}</p>
      </Col>
    );
  });

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <Row>{renderContactDetails}</Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
