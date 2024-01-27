const bcrypt = require("bcryptjs");

describe('Password encryption test', () => {
  it('should encrypt the password', async () => {
    // Mock request and response objects
    const plainPassword = 'testPassword';

    // Call the bcrypt functions
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    // Assertions
    expect(salt).toBeDefined();
    expect(hashedPassword).toBeDefined();
  });
});


describe('Password decryption test', () => {
    it('should decrypt the password', async () => {
      // Mock request and response objects
      const plainPassword = 'testPassword';
  
      // Encrypt the password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(plainPassword, salt);
  
      // Decrypt the password
      const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  
      // Assertions
      expect(isMatch).toBeTruthy();
    });
  });
