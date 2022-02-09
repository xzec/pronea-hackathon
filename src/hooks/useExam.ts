import { useContext } from 'react';
import ExamContext from '../contexts/ExamContext';

const useExam = () => useContext(ExamContext);

export default useExam;
