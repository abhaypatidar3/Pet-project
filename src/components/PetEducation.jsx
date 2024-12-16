import React from "react";

const PetEducation = () => {
  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>Pet Training and Nutrition</h1>
        <p style={headerSubtitleStyle}>
          Empowering you to nurture your furry friends with care and expertise.
        </p>
      </header>

      <div style={containerStyle}>
        <div style={sectionStyle} id="training">
          <div>
            <h2 style={sectionTitleStyle}>Effective Training Techniques</h2>
            <p>
              Training is vital for a well-behaved and happy pet. Start with these proven techniques:
            </p>
            <ul style={listStyle}>
              <li><strong>Positive Reinforcement:</strong> Reward pets for good behavior to encourage repetition.</li>
              <li><strong>Consistency:</strong> Use consistent commands and rules for clarity.</li>
              <li><strong>Short Sessions:</strong> Keep training to 5-10 minutes to maintain focus.</li>
              <li><strong>Patience:</strong> Allow pets to learn at their own pace.</li>
            </ul>
          </div>
          <img src="./images/pet training.jpg" alt="Training a pet" style={imageStyle} />
        </div>

        <div style={sectionStyle} id="socialization">
          <div>
            <h2 style={sectionTitleStyle}>Socializing Your Pet</h2>
            <p>
              Help your pet adapt to new environments and build confidence with socialization. Introduce them to diverse settings, sounds, and animals early on to reduce anxiety.
            </p>
          </div>
          <img src="./images/Pet_social.jpg" alt="Pet socialization" style={imageStyle} />
        </div>

        <div style={sectionStyle} id="nutrition">
          <div>
            <h2 style={sectionTitleStyle}>Nutrition for Your Pet</h2>
            <p>A healthy diet ensures vitality. Follow these guidelines:</p>
            <ul style={listStyle}>
              <li><strong>High-Quality Food:</strong> Choose food suitable for your pet's age, size, and breed.</li>
              <li><strong>Portion Control:</strong> Avoid overfeeding or underfeeding. Check package labels or consult a vet.</li>
              <li><strong>Fresh Water:</strong> Always provide clean water to prevent dehydration.</li>
              <li><strong>Avoid Toxic Foods:</strong> Steer clear of chocolate, grapes, and other harmful items.</li>
            </ul>
          </div>
          <img src="./images/nutrition.jpg" alt="Pet food" style={imageStyle} />
        </div>

        <div style={sectionStyle} id="treats">
          <div>
            <h2 style={sectionTitleStyle}>Healthy Treats</h2>
            <p>Reward pets with treats responsibly:</p>
            <ul style={listStyle}>
              <li>Carrot sticks or apple slices (remove seeds).</li>
              <li>Low-fat, high-protein commercial treats.</li>
              <li>Cooked lean meat (unseasoned).</li>
            </ul>
          </div>
          <img src="./images/health.jpg" alt="Healthy treats" style={imageStyle} />
        </div>
      </div>

      <div style={extraContentStyle}>
        <h2 style={sectionTitleStyle}>Understanding Pet Behavior</h2>
        <p>
          Training is not just about commands but also understanding your pet's behavior. Recognizing signs of stress, happiness, or anxiety can make training more effective.
        </p>

        <h2 style={sectionTitleStyle}>Training Challenges and Solutions</h2>
        <p>
          Challenges such as barking or resistance to commands can arise. Address these calmly and avoid punishment. Professional training sessions can help.
        </p>

        <h2 style={sectionTitleStyle}>Importance of Regular Exercise</h2>
        <p>
          Regular exercise maintains your pet's physical and mental health. Play sessions, interactive toys, and agility training can prevent boredom and undesirable behavior.
        </p>
      </div>

      <footer style={footerStyle}>
        <p>&copy; 2024 Pet Training and Nutrition. Your companion, your care.</p>
      </footer>
    </div>
  );
};

// Styles
const pageStyle = { fontFamily: "Arial, sans-serif", lineHeight: 1.6, margin: 0, padding: 0 };
const headerStyle = {
  textAlign: "center",
  padding: "2rem",
  backgroundColor: "#8abce8",
};
const headerTitleStyle = { marginBottom: "0.5rem", fontSize: "3rem", color: "#fff" };
const headerSubtitleStyle = { fontSize: "1.5rem", color: "#fff" };
const containerStyle = {
  padding: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  margin: "0 auto",
};
const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "1.5rem",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};
const sectionTitleStyle = { color: "#4a90e2", fontSize: "2rem", marginBottom: "1rem" };
const listStyle = { textAlign: "left", margin: "0 auto", padding: "0", listStyleType: "disc" };
const imageStyle = { maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" };
const extraContentStyle = {
  margin: "2rem auto",
  padding: "2rem",
  backgroundColor: "#f9fafb",
  borderRadius: "10px",
  maxWidth: "800px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};
const footerStyle = {
  textAlign: "center",
  padding: "1.5rem",
  backgroundColor: "#2c3e50",
  color: "white",
  fontSize: "1.1rem",
};

export default PetEducation;
