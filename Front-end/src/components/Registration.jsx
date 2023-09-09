import React, { useState } from 'react';
import axios from 'axios';

function Registration({ auth }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    image: '',
    phoneNumber: '',
    city: '',
  });

  const [usageType, setUsageType] = useState('buying');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const usin = { using: usageType };

    // Check if any of the input fields are empty
    if (Object.values(userData).some((field) => field === '')) {
      alert('Please fill out all fields');
      return;
    }

    // Check if the password meets your JWT criteria
    if (!isValidPassword(userData.password)) {
      alert('Password does not meet criteria');
      return;
    }

    try {
      const userDataWithUsageType = { ...userData, ...usin };
      const response = await axios.post('https://deployingbec.vercel.app/users', userDataWithUsageType);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
    auth();
  };

  const isValidPassword = (password) => {
    // Implement your password criteria checking logic here
    // For example, check for minimum length, special characters, etc.
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }

    // Add more checks as needed

    return true;
  };

  return (
    <div className='body-register'>
    <form style={{width:"500px" , "font-family":"monoscope"}}>
    <h2 style={{"margin-bottom":"20PX"}} >Sign Up</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p className="error">{passwordError}</p>
        </div>
        
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={userData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
          />
          <div>
          <label>Usage Type:</label>
          <div >
            <label style={{"cursor": "pointer"   ,  "font-size": "20px",
            "font-weight": "bold", "margin-top":"8px"}}>
              <input
                type="checkbox"
                name="usageType"
                checked={usageType === 'buying'}
                onChange={handleInputChange}
              />
              Buying
            </label>
            <label style={{"cursor": "pointer"   ,  "font-size": "20px",
            "font-weight": "bold"}}>
              <input
                type="checkbox"
                name="usageType"
                checked={usageType === 'selling'}
                onChange={() => {
                  if (usageType === 'selling') {
                    setUsageType('buying');
                  } else {
                    setUsageType('selling');
                  }
                }}
              />
              Selling
            </label>
          </div>
        </div>
        </div>

        <button onClick={handleRegistration}>Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
