import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';

const ExamContext = React.createContext({
  questions: [],
});

export const ExamProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (questions?.length > 0) return;

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'questions')).then((snapshot) => {
      console.log('snap', snapshot.val());
      if (snapshot.exists()) setQuestions(snapshot.val());
      else console.log('No data available');
    });
  }, []);

  return (
    <ExamContext.Provider
      value={{
        questions
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContext;
