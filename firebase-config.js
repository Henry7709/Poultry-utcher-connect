/* Poultry Connect: shared database settings.
   While this says null, posts are saved only on each person's own phone.
   To share posts between everyone, replace null with the settings object from your Firebase project,
   so the line looks like:  window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." };
   Keep the semicolon at the end. */
window.FIREBASE_CONFIG = null;
