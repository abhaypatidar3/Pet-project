import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

// Signup API call
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// Login API call
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Get Pets API call
export const getPets = async () => {
  try {
    const response = await axios.get(`${API_URL}/pets`);
    return response.data;
  } catch (error) {
    console.error("Get pets error:", error);
    throw error;
  }
};

// Add Pet API call
export const addPet = async (petData) => {
  try {
    const response = await axios.post(`${API_URL}/pets`, petData);
    return response.data;
  } catch (error) {
    console.error("Add pet error:", error);
    throw error;
  }
};
