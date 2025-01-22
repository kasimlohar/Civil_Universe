
import { validateEmail, validatePassword, validatePhone } from '../../utils/formValidation';

describe('Form Validation', () => {
  describe('validateEmail', () => {
    test('validates correct email format', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('validates password requirements', () => {
      const result = validatePassword('Password123!');
      expect(result.isValid).toBe(true);
    });
  });
});