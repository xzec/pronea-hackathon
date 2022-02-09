import { getDatabase, ref, push } from 'firebase/database';
import { ExamEvent } from './types';

const logEvent = async ({
  questionNumber,
  message,
  username = 'Matej',
  createdAt = Date.now()
}: Partial<ExamEvent>) => {
  const db = getDatabase();
  await push(ref(db, 'events'), {
    questionNumber,
    message,
    username,
    createdAt
  });
};

export default logEvent;
