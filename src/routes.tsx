import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ExamPage from './pages/ExamPage';
import MonitorPage from "./pages/MonitorPage";

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'exam', element: <ExamPage /> },
      { path: 'monitor', element: <MonitorPage /> },
      { path: '/', element: <Navigate to="exam" /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
