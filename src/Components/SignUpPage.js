import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaCompass } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear the error for the field being edited
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Your email is invalid';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'The password is less than 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', formData);
        console.log('Registration successful:', response.data);
        setShowSuccess(true);
        // Simulate navigation to home page after 3 seconds
        setTimeout(() => {
          window.location.href = '/'; // Replace with your actual home page URL
        }, 3000);
      } catch (error) {
        console.error('Registration error:', error.response.data);
        setErrors({ ...errors, general: error.response.data.msg });
      }
    }
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Architectural background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#333" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <motion.div
        className="position-absolute"
        style={{ top: '10%', left: '5%', zIndex: 1 }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCompass size={100} color="#007bff" opacity={0.2} />
      </motion.div>
      <motion.div
        className="position-absolute"
        style={{ bottom: '15%', right: '10%', zIndex: 1 }}
        animate={{
          rotate: -360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="100" stroke="#007bff" strokeWidth="2" opacity="0.2"/>
          <circle cx="60" cy="60" r="40" stroke="#007bff" strokeWidth="2" opacity="0.2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#007bff" strokeWidth="2" opacity="0.2"/>
          <line x1="60" y1="10" x2="60" y2="110" stroke="#007bff" strokeWidth="2" opacity="0.2"/>
        </svg>
      </motion.div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-5 rounded-3 shadow-lg"
              style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            >
              <h2 className="text-center mb-4 text-primary">Blueprint Your Future</h2>
              <p className="text-center mb-4 text-white">Join our community of architects and designers</p>
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Alert variant="success" className="mb-4">
                      You have successfully signed up! Redirecting to home page...
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-dark text-light">
                      <FaUser />
                    </span>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-dark text-light border-dark"
                      isInvalid={!!errors.name}
                    />
                  </div>
                  {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-dark text-light">
                      <FaEnvelope />
                    </span>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-dark text-light border-dark"
                      isInvalid={!!errors.email}
                    />
                  </div>
                  {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-dark text-light">
                      <FaLock />
                    </span>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="bg-dark text-light border-dark"
                      isInvalid={!!errors.password}
                    />
                  </div>
                  {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
              <p className="text-center mt-4 mb-0">
                Already have an account? <a href="/login" className="text-primary">Log In</a>
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .input-group-text {
          border-right: none;
        }

        .form-control {
          border-left: none;
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #007bff;
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
  );
};

export default SignUpPage;