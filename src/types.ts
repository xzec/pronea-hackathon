import { Q_TYPE } from './constants';

export type QType = keyof typeof Q_TYPE;

export interface IOption {
  value: string;
  correct: boolean;
}

export interface IQuestion {
  title: string;
  type: QType;
  options?: IOption[];
  answer?: string;
  points?: number;
}

export interface ExamEvent {
  questionNumber: number;
  message: string;
  username: string;
  createdAt: number;
};

export interface StudentEvent {
  message: string;
  link: string;
  createdAt: number;
  actionLabel: string;
};
