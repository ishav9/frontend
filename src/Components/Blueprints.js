import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Users, Clock, DollarSign } from 'lucide-react';
import p1 from '../images/p1.JPG'
import D31 from '../images/D31.png'
import D32 from '../images/D32.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Blueprints=() => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const blueprints = [
    {
      preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D2-UDD5PZ7pmGuCkhlydsABv3pgbRHnW6.jpg",
      title: "250.00 Sq.Yds. North facing",
      plans: [
        {
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drawing2-RGBFPMQgEdPECRYLOLESobdKZPjOga.jpg",
          downloadUrl: "https://drive.google.com/file/d/15gEiRbFUL6iCJFghiIOzuOHsoAYWZKlJ/view?usp=drivesdk"
        },
        {
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drawing2(1)-1B0kbepboKvkRV7lxpc4p4ulXVyomj.jpg",
          downloadUrl: "https://drive.google.com/file/d/15hKluxhxiwIwdISc5jJmiBqarS9AFoYe/view?usp=drivesdk"
        }
        
      ]
    },
    {
      preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D3-h2Lq73KJr2C5vuIA7mIQ1pjsa3ruXi.jpg",
      title: "450.00 Sq.Yds. East facing",
      plans: [
        {
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d3%20(1)-eXoN6JEEGSrObNLBQon4acNc3mmcoW.png",
          downloadUrl: "https://drive.google.com/file/d/15in9XZ3nZhkakQrJN7FuEWhAIIoid1aJ/view?usp=drivesdk"
        },
        {
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d3%20(2)-t33V7VEWYPL4RY2VL8NPnwzdTM9yqh.png",
          downloadUrl: "https://drive.google.com/file/d/15izFpCqBaw4MIEsfJYqt9V8Eyc6OK2q1/view?usp=drivesdk"
        }
      ]
    },
    {
      preview:p1,
      title: "500.00 Sq.Yds. South facing",
      plans: [
        {
          image: D31,
          downloadUrl: "https://drive.google.com/file/d/15Xi9TfxpK0lNFXIyTSL8KjdHERE7Xr2Y/view"
        },
        {
          image: D32,
          downloadUrl: "https://drive.google.com/file/d/1T3P0AoyAz9ui7yy4jwlxmWwo5XJp8FbI/view"
        }
      ]
    }
  ];

  const features = [
    { icon: Clock, title: "Save Time", description: "Get instant access to professional blueprints" },
    { icon: DollarSign, title: "Save Money", description: "Avoid costly design fees with our ready-made plans" },
    { icon: Users, title: "Customizable", description: "Easily modify plans to suit your needs" },
  ];

 

  const faqs = [
    { question: "Are these blueprints customizable?", answer: "Yes, all our blueprints can be customized to fit your specific needs." },
    { question: "Do I need special software to view the blueprints?", answer: "No, our blueprints are provided in PDF format which can be viewed with any standard PDF reader." },
    { question: "Can I use these blueprints for commercial projects?", answer: "Our blueprints are primarily for residential use. For commercial projects, please contact us for more information." },
  ];

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-dark text-light">
      {/* Sticky Navbar */}
     

      {/* Hero Section */}
      <section className="py-5 position-relative overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
        <Container className="position-relative py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-5"
          >
            <h1 className="display-3 fw-bold mb-4">
              Bring Your Project to Life: <br />
              <span className="text-primary">BluePrints</span>
            </h1>
            <p className="lead mb-4">
              Save time and money with our library of free downloadable <span className="text-primary">BluePrints</span>.
              <br />All you need to do is click on the blueprint you want, and it's yours!
            </p>
            <motion.a
              href="#blueprints"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg"
            >
              Explore Blueprints
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* Blueprints Grid */}
      <section id="blueprints" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our BluePrint Collection</h2>
          {blueprints.map((blueprint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-5 p-4 bg-black rounded-3"
            >
              <Row className="align-items-center">
                {/* Preview Image */}
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="position-relative">
                    <img
                      src={blueprint.preview}
                      alt={blueprint.title}
                      className="w-100 rounded-3"
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                         style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <h3 className="h4 mb-0">{blueprint.title}</h3>
                    </div>
                  </div>
                </Col>

                {/* Blueprint Downloads */}
                <Col lg={6}>
                  <Row className="g-4">
                    {blueprint.plans.map((plan, planIndex) => (
                      <Col md={6} key={planIndex}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="position-relative cursor-pointer"
                          onClick={() => handleDownload(plan.downloadUrl)}
                        >
                          <div className="position-relative">
                            <img
                              src={plan.image}
                              alt={`Blueprint ${planIndex + 1}`}
                              className="w-100 rounded-3"
                              style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover:opacity-75 transition-opacity rounded-3 d-flex align-items-center justify-content-center">
                              <Download className="text-white" size={32} />
                            </div>
                          </div>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-black">
        <Container>
          <h2 className="text-center mb-5">Why Choose Our BluePrints?</h2>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon size={48} className="text-primary mb-3" />
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
     

      {/* FAQ Section */}
      <section id="faq" className="py-5 bg-black">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3 cursor-pointer"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <h3 className="h5 mb-0">{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                />
              </div>
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-dark rounded-bottom"
                  >
                    <p className="mb-0">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">Download your first blueprint today and bring your vision to life!</p>
          <motion.a
            href="#blueprints"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-light btn-lg"
          >
            Explore BluePrints
          </motion.a>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-black text-center">
        <Container>
          <p className="mb-0">
            We are happy to help with any further inquiries. You can reach us by email at{' '}
            <a href="mailto:vermaisha7664@gmail.com" className="text-primary text-decoration-none">
              
              vermaisha7664@gmail.com
            </a>
          </p>
        </Container>
      </footer>

      <style jsx global>{`
        .cursor-pointer {
          cursor: pointer;
        }
        
        .hover\\:opacity-75:hover {
          opacity: 0.75 !important;
        }
        
        .transition-opacity {
          transition: opacity 0.3s ease;
        }

        .transition-transform {
          transition: transform 0.3s ease;
        }

        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default Blueprints;