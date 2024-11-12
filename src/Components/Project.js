import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArchNavbar from './ArchNavbar';

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p7-pawIBxIF5ZqUY1GkFDraRH2XMeav38.jpg",
      title: "Modern Residential Villa",
      description: "A contemporary two-story residence featuring a perfect blend of stone, glass, and wooden elements. This design emphasizes indoor-outdoor living with multiple balconies and a rooftop terrace.",
      details: ["Location: Urban residential area", "Area: 4,500 sq ft", "Year: 2023", "Type: Residential"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-vZIVSUDxxH45VWemrPvrnFxy9TcXED.jpg",
      title: "Temple Interior Design",
      description: "An opulent religious space featuring intricate architectural details and sacred geometry. The design incorporates a golden domed ceiling with traditional patterns and marble flooring with geometric inlays.",
      details: ["Location: Cultural district", "Area: 2,000 sq ft", "Year: 2022", "Type: Religious"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-GiBhhDnlR1JXrNelcQ8PkISvh15Ds2.jpg",
      title: "Alpinewood Public School",
      description: "A modern educational facility designed with sustainability in mind. The four-story structure features blue-tinted solar panels and large windows for natural lighting.",
      details: ["Location: Suburban area", "Area: 75,000 sq ft", "Year: 2023", "Type: Educational"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-fDWI8MKqQOBLLl3bPfm2K9mpAwHoPq.jpg",
      title: "Marriage Palace at Jalandhar",
      description: "A grand wedding venue inspired by classical colonial architecture. The symmetrical design features three magnificent domed towers and a balanced facade of red brick and cream-colored elements.",
      details: ["Location: Jalandhar", "Area: 45,000 sq ft", "Year: 2022", "Type: Commercial"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-BqvSManl28EMWHvcobBVo2E8BF5p4l.jpg",
      title: "Little Angels College of Education",
      description: "A contemporary educational institution featuring clean lines and modern aesthetics. The two-story structure incorporates wooden accents and geometric shapes, creating an inviting learning environment.",
      details: ["Location: Panniwala", "Area: 35,000 sq ft", "Year: 2021", "Type: Educational"]
    }
  ];

  const interiorDesigns = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce3f1876-8ec8-486b-9df6-f838b16782be-xAw6rDVBOD7AsFRj5bYpg3CmU8NiAQ.jpeg",
      title: "Minimalist Dining Space",
      description: "A top-down view of a contemporary dining setup featuring clean lines and neutral tones.",
      details: ["Style: Minimalist", "Color Scheme: Neutral", "Type: Residential"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b6d12734-407e-4b35-b310-4405fbaf8b3b-vJlrcpUo1WOgTAC5WRCcMpGwRrmHgs.jpeg",
      title: "Parisian-Inspired Kitchen",
      description: "Elegant white kitchen with marble walls, featuring black accents and Parisian artwork.",
      details: ["Style: Modern Classic", "Color Scheme: White & Black", "Type: Residential"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daea1ad0-66e2-47ce-ae78-1c4cb1c2bcf3-twIXknzIEVyhNL55Kmv18sedraFh5N.jpeg",
      title: "Sage Green Kitchen Suite",
      description: "Contemporary kitchen design combining white and sage green cabinetry with marble walls and modern appliances.",
      details: ["Style: Contemporary", "Color Scheme: Sage Green & White", "Type: Residential"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd364266-1897-4b5e-b6d4-af5036b29c91-EhJXBjPzccvaOZHzI3bhOnIAJTkbaL.jpeg",
      title: "Integrated Kitchen Living",
      description: "Modern kitchen space with built-in appliances and a comfortable dining area.",
      details: ["Style: Modern", "Features: Built-in Appliances", "Type: Residential"]
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/87b52af4-6542-4725-9219-f9ca618e3ee7-eLqPGDN1II85h2ZlgpQtMezhrjV4HP.jpeg",
      title: "Display Kitchen Design",
      description: "Sophisticated kitchen featuring glass-front cabinets and open shelving for display.",
      details: ["Style: Contemporary", "Features: Display Storage", "Type: Residential"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 3000);
  
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="bg-dark text-light">
      {/* Hero Section with Automatic Slideshow */}
      <section className="vh-100 position-relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-100 h-100 position-absolute"
            style={{
              backgroundImage: `url(${projects[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>
      </section>

      {/* Introduction Section */}
      <section className="py-5 bg-black">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 mb-4">Architectural Excellence</h1>
                <p className="lead mb-5">Crafting spaces that inspire, innovate, and endure. Explore our diverse portfolio of architectural marvels that showcase our commitment to design excellence and functional beauty.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 display-4">Our Projects</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5"
            >
              <Row className={`align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="position-relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-auto"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="p-4">
                    <h3 className="h2 mb-4">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="d-flex flex-wrap gap-3">
                      {project.details.map((detail, i) => (
                        <span key={i} className="badge bg-primary p-2">{detail}</span>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* Interior Design Section */}
      <section className="py-5 bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 mb-4">Interior Excellence</h2>
            <p className="lead">Discover our curated collection of interior designs that blend functionality with aesthetic beauty.</p>
          </motion.div>
          
          {interiorDesigns.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5"
            >
              <Row className={`align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="position-relative overflow-hidden rounded-3">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={design.image}
                      alt={design.title}
                      className="w-100 h-auto"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="p-4">
                    <h3 className="h2 mb-4">{design.title}</h3>
                    <p className="mb-4">{design.description}</p>
                    <div className="d-flex flex-wrap gap-3">
                      {design.details.map((detail, i) => (
                        <span key={i} className="badge bg-primary p-2">{detail}</span>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </Container>
      </section>

      <style jsx global>{`
        .badge {
          font-weight: normal;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Project;