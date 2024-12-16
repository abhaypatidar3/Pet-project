// src/components/PetList.js
import React, { useState } from 'react';

const PetList = () => {
  const [pets] = useState([
    { id: 1, name: 'Bella', breed: 'Golden Retriever', age: 2, image: '/images/bella.jpg' },
    { id: 2, name: 'Max', breed: 'Parrot', age: 3, image: '/images/max.jpg' },
    { id: 3, name: 'Charlie', breed: 'Bulldog', age: 1, image: '/images/charlie.jpg' },
    { id: 4, name: 'Luna', breed: 'Siamese Cat', age: 2, image: '/images/luna.jpg' },
    { id: 5, name: 'Rocky', breed: 'German Shepherd', age: 4, image: '/images/rocky.jpg' },
    { id: 6, name: 'Daisy', breed: 'Beagle', age: 3, image: '/images/daisy.jpg' },
    { id: 7, name: 'Sadie', breed: 'Boxer', age: 2, image: '/images/sadie.jpg' },
    { id: 8, name: 'Cooper', breed: 'Labrador Retriever', age: 5, image: '/images/cooper.jpg' },
    { id: 9, name: 'Milo', breed: 'French Bulldog', age: 1, image: '/images/milo.jpg' },
    { id: 10, name: 'Maggie', breed: 'Poodle', age: 3, image: '/images/maggie.jpg' },
    { id: 11, name: 'Buddy', breed: 'Cocker Spaniel', age: 2, image: '/images/buddy.jpg' },
    { id: 12, name: 'Zoe', breed: 'Yorkshire Terrier', age: 4, image: '/images/zoe.jpg' },
    { id: 13, name: 'Toby', breed: 'Chihuahua', age: 2, image: '/images/toby.jpg' },
    { id: 14, name: 'Bella', breed: 'Rottweiler', age: 3, image: '/images/bella2.jpg' },
    { id: 15, name: 'Oliver', breed: 'Maine Coon Cat', age: 4, image: '/images/oliver.jpg' },
    { id: 16, name: 'Ruby', breed: 'Bengal Cat', age: 2, image: '/images/ruby.jpg' },
    { id: 17, name: 'Jack', breed: 'Dalmatian', age: 3, image: '/images/jack.jpg' },
    { id: 18, name: 'Sasha', breed: 'Shih Tzu', age: 2, image: '/images/sasha.jpg' },
    { id: 19, name: 'Bailey', breed: 'Pomeranian', age: 3, image: '/images/bailey.jpg' },
    { id: 20, name: 'Lily', breed: 'Great Dane', age: 4, image: '/images/lily.jpg' },
    { id: 21, name: 'Ginger', breed: 'Airedale Terrier', age: 3, image: '/images/ginger.jpg' },
    { id: 22, name: 'Rusty', breed: 'Australian Shepherd', age: 2, image: '/images/rusty.jpg' },
    { id: 23, name: 'Scout', breed: 'Shiba Inu', age: 3, image: '/images/scout.jpg' },
    { id: 24, name: 'Harley', breed: 'Basset Hound', age: 4, image: '/images/harley.jpg' },
    { id: 25, name: 'Bear', breed: 'Akita', age: 3, image: '/images/bear.jpg' },
    { id: 26, name: 'Jasper', breed: 'Cavalier King Charles Spaniel', age: 2, image: '/images/jasper.jpg' },
    { id: 27, name: 'Sammy', breed: 'Newfoundland', age: 4, image: '/images/sammy.jpg' },
    { id: 28, name: 'Lola', breed: 'English Bulldog', age: 3, image: '/images/lola.jpg' },
    { id: 29, name: 'Chester', breed: 'Chesapeake Bay Retriever', age: 2, image: '/images/chester.jpg' },
    { id: 30, name: 'Sushi', breed: 'Schnauzer', age: 1, image: '/images/Shushi.jpg' }
  ]);

  const handleAdopt = (pet) => {
    // Redirect to the form link with pet details as query parameters
    const formLink = `https://docs.google.com/forms/d/e/1FAIpQLScSWF1AaKl6_Eb4BQKOZS3hjXsrDRGgMHk6necew-ChnbHbjw/viewform?usp=dialog/adoption-form?Pet name=${encodeURIComponent(
      pet.name
    )}&Pet breed=${encodeURIComponent(pet.breed)}&age=${pet.age}`;
    window.location.href = formLink;
  };
  // const handleAdopt = (pet) => {
  //   // Redirect to the form link with pet details as query parameters
  //   const formLink = `home.html=${encodeURIComponent(
  //     pet.name
  //   )}&breed=${encodeURIComponent(pet.breed)}&age=${pet.age}`;
  //   window.location.href = formLink;
  // };
  // const handleAdopt = (pet) => {
  //   // Redirect to the form link with pet details as query parameters
  //   const formLink ="home.html"
  //   window.location.href = formLink;
  // };

  return (
    <div className="pet-list">
      <h2>Available Pets for Adoption</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <div className="pet-item">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <div className="pet-details">
                <h3>{pet.name}</h3>
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age} years</p>
                <button onClick={() => handleAdopt(pet)}>Adopt</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
