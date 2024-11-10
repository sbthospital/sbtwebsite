import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

// Styled components for styling
const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 1.1rem;
`;

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_hrnzwq8', 
        'template_7wnuecw', 
        formData, 
        '2NK28o_WdkQ-f7-aZ'
      )
      .then(
        (response) => {
          setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
          setErrorMessage('');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Oops! Something went wrong. Please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </ContactContainer>
  );
};

export default ContactUsForm;
