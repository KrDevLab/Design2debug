// js/data/testimonials.js
//
// Testimonials are stored in Firestore (collection: "testimonials") so every
// visitor sees the same shared list, not just the browser that submitted it.
// Requires js/components/firebase-init.js to be loaded first (defines window.db).

window.getTestimonials = async function getTestimonials() {
  try {
    const snap = await window.db
      .collection("testimonials")
      .orderBy("created_at", "desc")
      .get();
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Failed to load testimonials:", err);
    return [];
  }
};

window.addTestimonial = async function addTestimonial({ name, service, rating, feedback }) {
  await window.db.collection("testimonials").add({
    name,
    service: service || null,
    rating,
    feedback,
    created_at: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

// Deletion is intentionally NOT wired to any button in the public UI.
// Delete unwanted reviews from the Firebase console (Firestore > testimonials),
// or call this from the browser console: window.deleteTestimonial(id)
window.deleteTestimonial = async function deleteTestimonial(id) {
  await window.db.collection("testimonials").doc(id).delete();
};