import { getDatabase, ref, push } from 'firebase/database';

const logEvent = async ({ questionNumber, message, username = 'Matej' }) => {
  const db = getDatabase();
  await push(ref(db, 'events'), {
    questionNumber,
    message,
    username,
    createdAt: Date.now()
  });
};

export default logEvent;
