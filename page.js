// Function to encrypt the message
function encryptMessage(message, shift) {
    let encrypted = '';
    for (let char of message) {
      if (char.match(/[a-z]/i)) {
        let charCode = char.charCodeAt(0);
        let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
        encrypted += String.fromCharCode(((charCode - base + shift) % 26) + base);
      } else {
        encrypted += char; // Keep non-alphabet characters as is
      }
    }
    return encrypted;
  }
  
  // Function to decrypt the message
  function decryptMessage(message, shift) {
    return encryptMessage(message, 26 - shift); // Reverse the encryption
  }
  
  // Get DOM elements
  const messageInput = document.getElementById('message');
  const shiftInput = document.getElementById('shift');
  const encryptButton = document.getElementById('encrypt');
  const decryptButton = document.getElementById('decrypt');
  const output = document.getElementById('output');
  
  // Event listener for encryption
  encryptButton.addEventListener('click', () => {
    const message = messageInput.value;
    const shift = parseInt(shiftInput.value);
    if (message) {
      output.textContent = encryptMessage(message, shift);
    } else {
      output.textContent = 'Please enter a message.';
    }
  });
  
  // Event listener for decryption
  decryptButton.addEventListener('click', () => {
    const message = messageInput.value;
    const shift = parseInt(shiftInput.value);
    if (message) {
      output.textContent = decryptMessage(message, shift);
    } else {
      output.textContent = 'Please enter a message.';
    }
  });
  