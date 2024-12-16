import React from 'react';

function Register() {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      padding: 0,
      margin: 0,
      background: '#D8E5F1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#333',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '80%',
      maxWidth: '1000px',
    },
    image: {
      width: '400px',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginRight: '20px',
    },
    registerContainer: {
      background: 'linear-gradient(180deg, #8ABCE8 0%, #D8E5F1 100%)',
      borderRadius: '10px',
      padding: '20px 30px',
      width: '400px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    heading: {
      fontSize: '1.2em',
      color: '#5e4db9',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    formGroup: {
      textAlign: 'left',
    },
    label: {
      fontSize: '0.9em',
      color: '#666',
      marginBottom: '5px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1em',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#5e4db9',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1em',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#4a3aa8',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Image Section */}
        <img src='./images/avani1.jpg'
          alt="Example"
          style={styles.image}
        />

        {/* Registration Container */}
        <div style={styles.registerContainer}>
          <h1 style={styles.heading}>
            "Unlock Your Personalized Wellness Journey – Log In To Syncora!"
          </h1>
          <form action="/register" method="post" style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>Username:</label>
              <input type="text" id="username" name="registration[username]" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="firstname" style={styles.label}>First Name:</label>
              <input type="text" id="firstname" name="registration[firstname]" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="lastname" style={styles.label}>Last Name:</label>
              <input type="text" id="lastname" name="registration[lastname]" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="emailaddress" style={styles.label}>Email Address:</label>
              <input
                type="email"
                id="emailaddress"
                name="registration[emailaddress]"
                placeholder="Email Address"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                type="password"
                id="password"
                name="registration[password]"
                placeholder="Password"
                required
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;



