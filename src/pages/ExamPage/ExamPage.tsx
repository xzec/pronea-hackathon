import React, { useEffect, useState } from 'react';
import Question from '../../components/Question';
import Content from '../../components/Content';
import useQuestionNumber from '../../hooks/useQuestionNumber';
import ExamNavigation from '../../components/ExamNavigation';
import logEvent from '../../logEvent';
import useExam from '../../hooks/useExam';
import {Typography} from "@mui/material";

const ExamPage: React.FC = () => {
  const questionNumber = useQuestionNumber();
  const [away, setAway] = useState<boolean>(false);
  const { questions } = useExam();

  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', () =>
      setAway(true)
    );
    document.documentElement.addEventListener('mouseenter', () =>
      setAway(false)
    );
  }, []);

  useEffect(() => {
    let interval;
    if (away) {
      interval = setInterval(() => {
        logEvent({
          message: 'opustil/a obrazovku na viac než 3 sekundy.',
          questionNumber
        });
        clearInterval(interval);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [away]);

  const question = questions?.[questionNumber - 1];
  if (!question?.title) return null;

  const { title, type, options, points } = questions?.[questionNumber - 1];

  return (
    <Content>
      <Typography variant="h3" color="textPrimary" sx={{ marginBottom: 6 }}>
        Test z Občianskej výchovy
      </Typography>
      <Question
        key={title}
        type={type}
        options={options}
        title={title}
        points={points}
      />
      <ExamNavigation count={questions?.length} />
    </Content>
  );
};

export default ExamPage;
