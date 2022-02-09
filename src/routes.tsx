import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ExamPage from './pages/ExamPage';
import MonitorPage from './pages/MonitorPage';
import ExamSettings from './pages/ExamSettings';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'exam/:questionNumber', element: <ExamPage /> },
      { path: 'monitor', element: <MonitorPage /> },
      { path: 'exam-settings', element: <ExamSettings /> },
      { path: '/', element: <Navigate to="exam/1" /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
