import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const ExamContext = React.createContext({
  questions: [],
  bonusMinutes: 0,
  addQuestion: (newQuestionNumber: number, question: any) => null
});

export const ExamProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [bonusMinutes, setBonusSeconds] = useState<number>(0);

  useEffect(() => {
    const db = getDatabase();
    const bonusMinutesRef = ref(db, 'bonusMinutes');
    const unsubscribe = onValue(bonusMinutesRef, (snapshot) => {
      if (snapshot.exists()) setBonusSeconds(snapshot.val());
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const questionsRef = ref(db, 'questions');
    const unsubscribe = onValue(questionsRef, (snapshot) => {
      if (snapshot.exists()) setQuestions(snapshot.val());
    });
    return unsubscribe;
  }, []);

  const addQuestion = (newQuestionNumber, question) => {
    const db = getDatabase();
    set(ref(db, 'questions/' + newQuestionNumber), question);
  };

  return (
    <ExamContext.Provider
      value={{
        questions,
        bonusMinutes,
        addQuestion
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContext;
