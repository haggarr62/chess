// Settings for Dad & Me Chess.
// These values are safe to publish: the Firebase security rules decide who can see the game,
// and each EmailJS template has its recipient fixed inside EmailJS.
window.CHESS_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDrd1jzersEE20VvrKEuHqVKyUE3Exb9pc",
    authDomain: "chess-for-two-6e3a6.firebaseapp.com",
    projectId: "chess-for-two-6e3a6",
    storageBucket: "chess-for-two-6e3a6.firebasestorage.app",
    messagingSenderId: "1067329634050",
    appId: "1:1067329634050:web:6ca5952f17b8046828cc1b"
  },

  // Two templates, each with its recipient fixed inside EmailJS.
  // Keys are SHA-256 hashes of each player's lowercase email address.
  emailjs: {
    serviceId: "service_bduy82d",
    publicKey: "5-XL6c12EOANULBVr",
    templates: {
      "0f13d5fbca7468e51c25234d19a6796802c616844f086ad3d634db803202cbb5": "chess_to_eric",
      "302a2483e396f5abb1a922ffdfb60f20b5e857639000a392a655b85054784288": "chess_to_dad"
    }
  },

  siteUrl: "https://haggarr62.github.io/chess/"
};
