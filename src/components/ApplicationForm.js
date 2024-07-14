import React, { useState } from 'react';
import { Container, Button, Form } from 'bootstrap';
import '../App.css';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
  
    const formUrl = 'https://formspree.io/f/xovavwjd'; 
    // Replace with your Formspree URL
    const data = {
      'name': name,
      'email': email,
    };
  
    fetch(formUrl, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');

          setName("");
          setEmail("");
          
        } else {
          alert('Failed to submit the form. Status: ' + response.status);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
      });
  };
//   };

  return (
    <div className='container'>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit} className="form-group">
  <input
    type="text"
    className="form-control"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Your Name"
    required
  />
  <input
    type="email"
    className="form-control"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Your Email"
    required
  />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default ApplicationForm;
