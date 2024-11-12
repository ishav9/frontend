import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home=() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertise = [
    {
      title: "Architectural Design",
      description: "Innovative and sustainable architectural solutions tailored to your vision.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Interior Spaces",
      description: "Creating functional and aesthetically pleasing interiors that inspire.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Urban Planning",
      description: "Shaping cities and communities with forward-thinking urban design strategies.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Restoration",
      description: "Preserving historical significance while modernizing for contemporary use.",
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
   
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div 
          className="position-absolute w-100 h-100" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h1 className="display-2 fw-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Crafting Tomorrow's
              <br />
              <span className="text-primary">Architectural Legacy</span>
            </h1>
            <p className="lead mb-5">Where innovation meets timeless design</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-light btn-lg px-5 py-3"
              style={{ borderRadius: 0 }}
            >
              Discover Our Vision
            </motion.button>
          </motion.div>
        </Container>
      </section>

      {/* Our Expertise */}
      <section className="py-5 bg-black">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Expertise
            </h2>
          </motion.div>
          <Row className="g-4">
            {expertise.map((item, index) => (
              <Col key={index} lg={6}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100 object-fit-cover"
                      />
                      <div className="position-absolute bottom-0 left-0 right-0 p-4 text-white"
                           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                        <h3 className="h4 mb-2">{item.title}</h3>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Design Philosophy */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="display-4 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Design Philosophy
                </h2>
                <p className="lead mb-4">
                  We believe in creating spaces that transcend mere structures, becoming living embodiments of our clients' aspirations.
                </p>
                <div className="d-flex flex-column gap-3">
                  {['Sustainable Innovation', 'Timeless Aesthetics', 'Human-Centric Design'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="d-flex align-items-center"
                    >
                      <div className="bg-primary p-2 me-3"></div>
                      <span className="h5 mb-0">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                    alt="Design Philosophy"
                    className="w-100 h-100 object-fit-cover"
                    style={{ height: '500px' }}
                  />
                  <div className="position-absolute top-0 left-0 w-100 h-100 bg-primary"
                       style={{ opacity: 0.1 }}></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Footer */}
      <footer className="py-5 bg-black">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="h3 mb-4">Contact Us</h2>
              <p>Ready to bring your architectural vision to life? Get in touch with us today.</p>
              <ul className="list-unstyled">
                <li>Email: ArcadeAssociates</li>
                <li>Phone: +91 98154-87425</li>
                <li>Address: Ludhiana, Punjab</li>
              </ul>
            </Col>
            <Col lg={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Your Name" className="bg-dark text-light border-secondary" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Your Email" className="bg-dark text-light border-secondary" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" className="bg-dark text-light border-secondary" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        body {
          font-family: 'Arial', sans-serif;
        }
        
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
        
        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `}</style>
    </div>
    </>
  );
};

export default Home;