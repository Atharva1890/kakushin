import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Auth.css'; // Create a CSS file for styling

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'volunteer', // Default to volunteer
  });
  const navigate = useNavigate(); // Correctly use useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication (e.g., API call)
    console.log('Form submitted:', formData);
    // Redirect to the main page after successful login/signup
    navigate('/'); // Use navigate instead of history.push
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <div>
            <label>
              <input
                type="radio"
                name="userType"
                value="volunteer"
                checked={formData.userType === 'volunteer'}
                onChange={handleChange}
              />
              Volunteer
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="organization"
                checked={formData.userType === 'organization'}
                onChange={handleChange}
              />
              Organization
            </label>
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </p>
      </form>
    </div>
  );
}

export default Auth;
