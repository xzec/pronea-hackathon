import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ExamPage from './pages/ExamPage';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'exam', element: <ExamPage /> },
      { path: '/', element: <Navigate to="exam" /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
