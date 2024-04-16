import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp, query, where, getDocs, writeBatch } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener una referencia a la colección de feedbacks
const feedbacksCollection = collection(db, 'feedbacks');

// Función para guardar feedback
export const saveFeedback = async (rating, feedback) => {
  try {
    await addDoc(feedbacksCollection, {
      rating: rating,
      feedback: feedback,
      date: Timestamp.now()
    });
    console.log('Gracias por enviarnos tu feedback');
  } catch (error) {
    console.error('Error saving feedback:', error);
    throw new Error('Error saving feedback');
  }
};

// Función para obtener todos los feedbacks
export const getAllFeedbacks = async () => {
  try {
    const snapshot = await getDocs(feedbacksCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting feedbacks:', error);
    throw new Error('Error getting feedbacks');
  }
};

// Función para eliminar feedbacks del mes anterior
export const deletePreviousMonthFeedbacks = async () => {
  try {
    const currentDate = new Date();
    const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const lastMonthTimestamp = Timestamp.fromDate(firstDayOfLastMonth);

    const q = query(feedbacksCollection, where('date', '<', lastMonthTimestamp));
    const snapshot = await getDocs(q);
    const batch = writeBatch(db);

    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log('Feedbacks from previous month deleted successfully');
  } catch (error) {
    console.error('Error deleting previous month feedbacks:', error);
    throw new Error('Error deleting previous month feedbacks');
  }
};
