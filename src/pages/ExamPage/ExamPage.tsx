import React, { useEffect, useState } from 'react';
import Question from '../../components/Question';
import Content from '../../components/Content';
import { IQuestion } from '../../types';
import useQuestionNumber from '../../hooks/useQuestionNumber';
import ExamNavigation from '../../components/ExamNavigation';
import logEvent from '../../logEvent';

const questions: IQuestion[] = [
  {
    title: 'Kedy začala 1. svetová vojna?',
    type: 'SINGLE_CHOICE',
    options: [
      {
        value: '1912',
        correct: false
      },
      {
        value: '1913',
        correct: false
      },
      {
        value: '1914',
        correct: true
      },
      {
        value: '1915',
        correct: false
      }
    ]
  },
  {
    title: 'Popíšte vzťahy medzi Winstonom Churchillom a Kráľom Jurajom VI.',
    type: 'OPEN_ENDED'
  },
  {
    title: 'A',
    type: 'OPEN_ENDED'
  },
  {
    title: 'B',
    type: 'OPEN_ENDED'
  },
  {
    title: 'C',
    type: 'OPEN_ENDED'
  }
];

const ExamPage: React.FC = () => {
  const questionNumber = useQuestionNumber();
  const [away, setAway] = useState<boolean>(false);

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
      console.log('away: just now');
      interval = setInterval(() => {
        console.log("away: +3s");
        logEvent({ message: 'mouseleave for >3000ms', questionNumber });
        clearInterval(interval);
      }, 3000);
    }
    else console.log('back');
    return () => clearInterval(interval);
  }, [away]);

  const { title, type, options, points } = questions[questionNumber - 1];

  return (
    <Content>
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
