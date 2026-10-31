// Settings for Dad & Me Chess. Fill these in by following SETUP.md.
// These values are safe to publish: the Firebase security rules decide who can see the game.
window.CHESS_CONFIG = {
  // Step 1: Firebase console > Project settings > General > Your apps > Web app > "firebaseConfig"
  firebase: {
    apiKey: "AIzaSyDrd1jzersEE20VvrKEuHqVKyUE3Exb9pc",
    authDomain: "chess-for-two-6e3a6.firebaseapp.com",
    projectId: "chess-for-two-6e3a6",
    storageBucket: "chess-for-two-6e3a6.firebasestorage.app",
    messagingSenderId: "1067329634050",
    appId: "1:1067329634050:web:6ca5952f17b8046828cc1b"
  },

  // Step 2: EmailJS (sends the "your move" emails)
  // Two templates, each with its recipient fixed inside EmailJS.
  // Keys are SHA-256 hashes of each player's lowercase email address.
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
    templates: {
      "0f13d5fbca7468e51c25234d19a6796802c616844f086ad3d634db803202cbb5": "TEMPLATE_FOR_YOU",
      "302a2483e396f5abb1a922ffdfb60f20b5e857639000a392a655b85054784288": "TEMPLATE_FOR_DAD"
    }
  },

  // Step 3: the address of your site once it's live, e.g. "https://yourname.github.io/chess/"
  // Used for the link inside each email. Leave empty to use whatever address the page is opened from.
  siteUrl: "https://haggarr62.github.io/chess/"
};
