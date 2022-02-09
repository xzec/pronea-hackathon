import { getDatabase, ref, push } from 'firebase/database';
import { StudentEvent } from './types';

const logStudentEvent = async ({
  message,
  link = '',
  actionLabel,
  createdAt = Date.now()
}: Partial<StudentEvent>) => {
  const db = getDatabase();
  await push(ref(db, 'studentEvents'), {
    message,
    link,
    actionLabel,
    createdAt
  });
};

export default logStudentEvent;
