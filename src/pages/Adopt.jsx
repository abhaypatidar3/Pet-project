import React, { useState, useEffect } from "react";
import PetList from "../components/PetList";

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pet data from API
    fetch("/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <div>
      <h2>Available Pets for Adoption</h2>
      <PetList pets={pets} />
    </div>
  );
}

export default Adopt;
