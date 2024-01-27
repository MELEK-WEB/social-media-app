const mongoose = require("mongoose");
const request = require("supertest");
//const User = require("../models/User"); // Replace with the path to your User model file

/* Connecting to the database before each test. */


describe("POST /auth/login", () => {
  it("should return 'User does not exist' for invalid credentials", async () => {
    const response = await request("http://localhost:6060/auth/login")
      .post("/auth/login")
      .send({
        email: "nonexistent@example.com",
        password: "invalidpassword",
      });

    expect(response.status).toBe(404);
  
  });
});

describe("POST /auth/login", () => {
  it("should return User", async () => {
    const response = await request("http://localhost:6060/auth/login")
      .post("/auth/login")
      .send({
        email: "nonexistent@example.com",
        password: "invalidpassword",
      });

    expect(response.status).toBe(404);
  
  });
});

// Add more tests as needed...
