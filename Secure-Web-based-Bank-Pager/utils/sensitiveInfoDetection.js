// Define the patterns for sensitive information detection
const sensitivePatterns = [
    /\b\d{10}\b/, // NIC number pattern
    /\b\d{12}\b/, // New NIC number pattern
    /\b\d{10}\b/, // Bank account number pattern
    /(?:\b|\D)(?:\d{3}-\d{2}-\d{4}|\d{2}\/\d{2}\/\d{4})(?:\b|\D)/, // Date pattern (MM/DD/YYYY or XXX-XX-XXXX)
  ];
  
  // Function to check for violations in a message
  function checkForViolations(message) {
    const violations = [];
  
    // Check if the message contains any sensitive information
    sensitivePatterns.forEach(pattern => {
      if (pattern.test(message)) {
        violations.push(pattern.toString());
      }
    });
  
    return violations;
  }
  
  // Export the function for use in other modules
  module.exports = { checkForViolations };
  