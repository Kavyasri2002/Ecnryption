function encryptText() {
    const text = document.getElementById('inputText').value;
    const password = document.getElementById('password').value;
  
    if (!text || !password) {
      alert("Please enter text and password.");
      return;
    }
  
    const ciphertext = CryptoJS.AES.encrypt(text, password).toString();
    document.getElementById('outputText').value = ciphertext;
  }
  
  function decryptText() {
    const ciphertext = document.getElementById('inputText').value;
    const password = document.getElementById('password').value;
  
    if (!ciphertext || !password) {
      alert("Please enter encrypted text and password.");
      return;
    }
  
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, password);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!originalText) {
        throw new Error();
      }
  
      document.getElementById('outputText').value = originalText;
    } catch (e) {
      alert("Decryption failed. Check your password or input.");
    }
  }
  