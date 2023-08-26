import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [registrationData, setRegistrationData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://20.244.56.144/train/register', registrationData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Register Your Company</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" name="companyName" value={registrationData.companyName} onChange={handleChange} />
        </label>
        <label>
          Owner Name:
          <input type="text" name="ownerName" value={registrationData.ownerName} onChange={handleChange} />
        </label>
        <label>
          Roll No:
          <input type="text" name="rollNo" value={registrationData.rollNo} onChange={handleChange} />
        </label>
        <label>
          Owner Email:
          <input type="email" name="ownerEmail" value={registrationData.ownerEmail} onChange={handleChange} />
        </label>
        <label>
          Access Code:
          <input type="text" name="accessCode" value={registrationData.accessCode} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
