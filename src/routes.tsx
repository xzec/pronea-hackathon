import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ExamView from './views/ExamView';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'exam', element: <ExamView /> },
      { path: '/', element: <Navigate to="exam" /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
