import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {
  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleAccount = () => {
    setDoYouHaveAnAccount(!doYouHaveAnAccount);
  };

  const handleLogin = () => {
    alert(`Welcome ${userName}! You have successfully logged in.`);
  };

  return (
    <>
      {doYouHaveAnAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <h1>Sign In</h1>
          <h3>Access your academic portal</h3>
          <label>Username:</label>
          <input
            type="text"
            placeholder='Please enter your username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /><br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <LibraryButton buttonLabel="LOGIN" onClickButton={handleLogin} /><br />
          <label>New here? </label>
          <LibraryButton buttonLabel="Create an Account" onClickButton={handleToggleAccount} />
        </div>
      ) : (
        <div style={{ border: "3px solid indigo", marginTop: "190px" }}>
          <h1>Create an Account</h1>
          <h3>Access your academic portal</h3>
          <label>Student ID:</label>
          <input type="text" /><br />
          <label>Email:</label>
          <input type="email" /><br />
          <label>Password:</label>
          <input type="password" /><br />
          <label>Confirm password:</label>
          <input type="password" /><br />
          <LibraryButton buttonLabel="SIGN UP" onClickButton={handleToggleAccount} /><br />
          <label>Already have an account? </label>
          <LibraryButton buttonLabel="Sign In" onClickButton={handleToggleAccount} />
        </div>
      )}
    </>
  )
}

export default LibraryLogin