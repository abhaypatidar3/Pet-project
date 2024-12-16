// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <div>
      {/* <a href="/home">Home</a> */}
      <header style={headerStyle}>
        <h1>Welcome to FurryFriendsHub</h1>
        <p>Your gateway to finding your furry best friend!</p>
      </header>

      <div className="container">
        {/* Section 1 */}
        <section className="section" style={sectionStyle}>
          <div className="text-content" style={textContentStyle}>
            <h2 style={headingStyle}>Find Your Perfect Companion</h2>
            <p style={paragraphStyle}>
              Discover a variety of pets waiting to meet you. Whether it’s a loyal
              dog, a graceful cat, or a cheerful bird, your new friend is just a
              click away! Our extensive database includes pets of all sizes, ages,
              and temperaments, ensuring you find the perfect match for your
              family and lifestyle. Explore detailed profiles with photos,
              personality descriptions, and background information to help you
              make an informed choice.
            </p>
          </div>
          <div className="image-content" style={imageContentStyle}>
            <img src="./images/avani3.jpg" alt="Pets" style={imageStyle} />
          </div>
        </section>

        {/* Section 2 (Reversed Layout for this section) */}
        <section className="section" style={sectionStyleReverse}>
          <div className="image-content" style={imageContentStyle}>
            <img src="./images/avani1.jpg" alt="Support" style={imageStyle} />
          </div>
          <div className="text-content" style={textContentStyle}>
            <h2 style={headingStyle}>Support Our Mission</h2>
            <p style={paragraphStyle}>
              Your kindness can make a big difference. Volunteer, donate, or
              foster to help us provide care and find homes for pets in need. At
              Pet Haven, we rely on the generosity of animal lovers like you to
              rescue, rehabilitate, and rehome countless pets each year. By
              contributing your time or resources, you help create a world where
              every animal is valued and loved. Discover opportunities to sponsor
              rescue operations, provide temporary foster care, or assist at our
              adoption events.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section" style={sectionStyle}>
          <div className="text-content" style={textContentStyle}>
            <h2 style={headingStyle}>Join Our Community</h2>
            <p style={paragraphStyle}>
              Connect with fellow pet lovers, share your adoption stories, and
              get advice on caring for your furry friends. Our community forum is
              a hub for exchanging tips, celebrating milestones, and learning from
              experts about pet care and training. Whether you're a seasoned pet
              owner or new to the journey, you'll find a wealth of support and
              camaraderie here. Participate in workshops, webinars, and social
              gatherings to build lasting connections with people who share your
              passion for animals.
            </p>
          </div>
          <div className="image-content" style={imageContentStyle}>
            <img src="./images/avani2.jpg" alt="Community" style={imageStyle} />
          </div>
        </section>
      </div>

      <footer style={footerStyle}>
        <p>&copy; 2024 Pet Haven. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const headerStyle = {
  backgroundColor: '#8abce8',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const sectionStyle = {
  padding: '40px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
};

const sectionStyleReverse = {
  padding: '40px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
//   flexDirection: 'row-reverse',  // This reverses the order of the image and description
};

const textContentStyle = {
  flex: 1,
};

const headingStyle = {
  color: '#8abce8',
  fontSize: '28px',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#555',
};

const imageContentStyle = {
  flex: 1,
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  marginTop: '40px',
};

export default Home;
