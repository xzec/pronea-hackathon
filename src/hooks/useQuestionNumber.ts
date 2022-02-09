import { useParams } from 'react-router-dom';

const useQuestionNumber = () => {
  const { questionNumber } = useParams();
  return parseInt(questionNumber ?? '1', 10);
};

export default useQuestionNumber;
