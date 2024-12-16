import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <header style={{ background: '#8abce8', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
                <h1>About Us</h1>
            </header>

            <div style={{
                maxWidth: '800px',
                margin: '2rem auto',
                padding: '1rem',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ color: '#8abce8' }}>Welcome to FurryFriendHub!</h2>
                <p>At FurryFriendHub, we believe that every pet deserves a loving home and every individual deserves the joy of unconditional companionship. Our mission is to connect adorable pets in need of homes with compassionate adopters ready to provide care and love.</p>

                <h3 style={{ color: '#8abce8' }}>Who We Are</h3>
                <p>We are a passionate team of animal lovers, advocates, and professionals dedicated to making pet adoption easier, more transparent, and rewarding. Founded on the principles of compassion and community, FurryFriendHub works closely with local shelters, rescue groups, and foster networks to bring together a diverse array of furry friends waiting for their forever families.</p>

                <h3 style={{ color: '#8abce8' }}>What We Do</h3>
                <ul style={{ listStyle: 'disc inside', margin: '1rem 0' }}>
                    <li><strong>Pet Matching Made Simple:</strong> With our user-friendly platform, you can browse through profiles of pets that match your lifestyle and preferences.</li>
                    <li><strong>Support for Adopters:</strong> We provide resources, tips, and guidance to ensure a smooth transition for both you and your new pet.</li>
                    <li><strong>Advocacy for Animals:</strong> Beyond adoption, we raise awareness about responsible pet ownership, spaying and neutering, and animal welfare.</li>
                </ul>

                <h3 style={{ color: '#8abce8' }}>Why Choose Us?</h3>
                <ul style={{ listStyle: 'disc inside', margin: '1rem 0' }}>
                    <li><strong>Comprehensive Listings:</strong> Access detailed profiles, including breed, age, temperament, and special needs, to find the perfect pet for you.</li>
                    <li><strong>Verified Partnerships:</strong> We partner only with trusted shelters and organizations to ensure ethical adoption practices.</li>
                    <li><strong>Community Connection:</strong> Join a growing network of pet lovers who share stories, advice, and support.</li>
                </ul>

                <h3 style={{ color: '#8abce8' }}>Join Us in Our Mission</h3>
                <p>Whether you're looking to adopt, foster, or simply support our cause, there's a place for you at FurryFriendHub. Together, we can create a brighter future for countless pets in need.</p>

                <p><strong>Start Your Journey Today</strong><br />Find your perfect furry companion, or help us spread the word about the joys of pet adoption.</p>

                <p><em>Because every tail deserves a wag, and every purr deserves a hug.</em></p>
            </div>

            <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem 0', background: '#333', color: '#fff' }}>
                <p>&copy; 2024 FurryFriendHub. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
